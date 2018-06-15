const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = (req, res) => {
  console.log(req.body)
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid Username/Password' });
      return;
    }
    if (user === null) {
      res.status(422).json({ error: 'No user with that username in our DB' });
      return;
    }
    user
      .checkPassword(password)
      .then(passwordsMatch => {
        if (passwordsMatch) {
          const payload = {
            username: user.username
          };
          const token = jwt.sign(payload, mysecret); // creates our JWT with a secret and a payload and a hash.
          res.status(200).json({ token }); // sends the token back to the client
        } else {
          res.status(422).json({ error: 'passwords dont match' });

        }
      })
  })
}

module.exports = {
  login
}
