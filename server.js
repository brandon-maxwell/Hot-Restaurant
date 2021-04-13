// Dependencies
const express = require('express');
const path = require('path');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Reservation data
const reservations = [
  {
    name: 'Test',
    phoneNumber: '5555555555',
    email: 'test@test.com',
    id: 'test',
  },
];
// Waitlist data
const waitlist= [
  {
    name: 'Test',
    phoneNumber: '5555555555',
    email: 'test@test.com',
    id: 'test',
  },
];
// Routes
// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
// Displays all reservations
// Create New reservations - takes in JSON input
app.post('/api/reservations', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newReservation = req.body;
});
// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

// add clear table