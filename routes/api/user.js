const express = require('express');
const router = express.Router();
const firebase = require('firebase/app');
const admin = require('firebase-admin');
const serviceAccount = require('../../config/serviceAccountKey.json');
const firebaseConfig = require('../../config/config');
require('firebase/auth');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://testvent-50af3.firebaseio.com',
});

// @route   GET/api/login
// @desc    GET user login cred and authenticate
// @desc    private
router.get('/login', (req, res) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
});

// @route   POST/api/register
// @desc    POST create users account
// @desc    private
router.post('/register', (req, res) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
});

module.exports = router;
