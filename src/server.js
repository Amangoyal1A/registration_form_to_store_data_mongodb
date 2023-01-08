
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8000;
const app = express();
const users_collection = require('./userdatabase/userdata');
require('./userdatabase/mongoose_con');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mainFolder = path.join(__dirname, '../');

app.get('/register', (req, res) => {
  res.sendFile(path.join(mainFolder, 'index.html'));
});

app.get('/', (req, res) => {
  res.send('home page');
});

app.post('/register', (req, res) => {
    // Check if a user with the same email already exists in the database
    users_collection.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          // If a user with the same email is found, send a message
          res.send('User with this email already exists');
        } else {
          // If no user with the same email is found, create a new user
          const myData = new users_collection(req.body);
          myData.save()
            .then(() => res.send('Successful'))
            .catch(error => res.send(error));
        }
      })
      .catch(error => res.send(error));
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
