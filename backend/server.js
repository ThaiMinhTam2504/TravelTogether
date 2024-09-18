const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/traveltogether');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    location: {
        lat: Number,
        lng: Number
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, 'secret');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.post('/location', async (req, res) => {
    const { token, lat, lng } = req.body;
    const { userId } = jwt.verify(token, 'secret');
    await User.findByIdAndUpdate(userId, { location: { lat, lng } });
    res.send('Location updated');
});

app.get('/friends-location', async (req, res) => {
    const { token } = req.query;
    const { userId } = jwt.verify(token, 'secret');
    const user = await User.findById(userId).populate('friends');
    res.json(user.friends.map(friend => ({ username: friend.username, location: friend.location })));
});

app.get('/user-info', async (req, res) => {
    const { token } = req.query
    const { userId } = jwt.verify(token, 'secret')
    const user = await User.findById(userId).populate('friends')
    res.json({
        username: user.username,
        friends: user.friends.map(friend => ({ username: friend.username, location: friend.location }))
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});