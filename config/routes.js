const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import middleware
const { authenticate } = require('./middlewares');

// Import knexConfig
const db = require('../database/dbConfig');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};


function register(req, res) {
  // implement user registration
  const creds = req.body;
  
  const hash = bcrypt.hashSync(creds.password, 10);
  creds.password = hash;
  
  db('users')
    .insert(creds)
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ newUserId: id })
    })
    .catch(err => {
      res.status(500).json({ error: 'Username already exist', err });
    })
};

const jwtKey = require('../_secrets/keys').jwtKey;

function generateToken(user) {
  const jwtPayload = {
    ...user,
  };
  const jwtOptions = {
    expiresIn: '3h',
  };

  return jwt.sign(jwtPayload, jwtKey, jwtOptions);
};

function login(req, res) {
  // implement user login
  const creds = req.body;

  db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user); // generate token for specific user
        res.status(200).json({ welcome: user.username, token });
      } else {
        res.status(401).json({ message: 'username or password is incorrect' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to login', err });
    })
};

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
