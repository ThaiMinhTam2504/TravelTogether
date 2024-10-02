// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/traveltogether');

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     phone: { type: String, unique: true },
//     username: { type: String, unique: true },
//     password: String,
//     location: {
//         lat: Number,
//         lng: Number
//     },
//     friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//     friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//     shareLocation: { type: Boolean, default: false }
// });

// const User = mongoose.model('User', userSchema);

// // app.post('/register', async (req, res) => {
// //     const { name, email, phone, username, password } = req.body;
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = new User({ name, email, phone, username, password: hashedPassword });
// //     try {
// //         await user.save();
// //         res.status(201).json({ message: 'User registered successfully' });
// //     } catch (error) {
// //         res.status(400).json({ message: error.message });
// //     }
// // });

// // app.post('/login', async (req, res) => {
// //     const { username, email, phone, password } = req.body;
// //     let user;
// //     if (username) {
// //         user = await User.findOne({ username });
// //     } else if (email) {
// //         user = await User.findOne({ email });
// //     } else if (phone) {
// //         user = await User.findOne({ phone });
// //     }

// //     if (user && await bcrypt.compare(password, user.password)) {
// //         const token = jwt.sign({ user: user._id }, 'secret');
// //         res.json({ token });
// //     } else {
// //         res.status(401).json({ message: 'Invalid credentials' });
// //     }
// // });


// // app.post('/login', async (req, res) => {
// //     const { username, password } = req.body;
// //     try {
// //         const user = await User.findOne({ username });
// //         if (!user) {
// //             return res.status(400).json({ message: 'Invalid username or password' });
// //         }
// //         const isPasswordValid = await bcrypt.compare(password, user.password);
// //         if (!isPasswordValid) {
// //             return res.status(400).json({ message: 'Invalid username or password' });
// //         }
// //         const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
// //         res.json({ token });
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // }); // lỗi chưa sửa your_jwt_secret thành secret


// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid username or password' });
//         }
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(400).json({ message: 'Invalid username or password' });
//         }
//         const token = jwt.sign({ userId: user._id }, 'secret');
//         res.json({ token });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// // app.post('/login', async (req, res) => {
// //     const { username, password } = req.body;
// //     const user = await User.findOne({ username });
// //     if (user && await bcrypt.compare(password, user.password)) {
// //         const token = jwt.sign({ userId: user._id }, 'secret');
// //         res.json({ token });
// //     } else {
// //         res.status(401).send('Invalid credentials');
// //     }
// // });
// //code cũ để đối chiếu


// app.post('/register', async (req, res) => {
//     const { name, email, phone, username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, email, phone, username, password: hashedPassword });
//     try {
//         await user.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });



// app.post('/location', async (req, res) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) {
//         return res.status(401).json({ message: 'jwt must be provided' });
//     }

//     try {
//         const { user } = jwt.verify(token, 'secret');
//         await User.findByIdAndUpdate(user, { location: { lat: req.body.lat, lng: req.body.lng } });
//         res.send('Location updated');
//     } catch (error) {
//         res.status(403).json({ message: error.message });
//     }
// });

// // app.get('/user-info', async (req, res) => {
// //     const { token } = req.query;
// //     const { user } = jwt.verify(token, 'secret');
// //     const userInfo = await User.findById(user).populate('friends');
// //     res.json({
// //         name: userInfo.name,
// //         email: userInfo.email,
// //         phone: userInfo.phone,
// //         username: userInfo.username,
// //         location: userInfo.location,
// //         friends: userInfo.friends.map(friend => ({ username: friend.username, location: friend.location }))
// //     });
// // });
// //cũ

// app.get('/user-info', async (req, res) => {
//     const { token } = req.query;
//     try {
//         const { user } = jwt.verify(token, 'secret');
//         console.log(user)
//         const userInfo = await User.findById(user).populate('friends');

//         if (!userInfo) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({
//             name: userInfo.name,
//             email: userInfo.email,
//             phone: userInfo.phone,
//             username: userInfo.username,
//             location: userInfo.location,
//             friends: userInfo.friends.map(friend => ({ username: friend.username, location: friend.location }))
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// app.post('/send-friend-request', async (req, res) => {
//     const { token, friendUsername, friendEmail } = req.body;
//     const { user } = jwt.verify(token, 'secret');
//     const friend = await User.findOne({ username: friendUsername, email: friendEmail });

//     if (!friend) {
//         return res.status(404).json({ message: 'User not found' });
//     }

//     if (friend.friendRequests.includes(user._id)) {
//         return res.status(400).json({ message: 'Friend request already sent' });
//     }

//     friend.friendRequests.push(user._id);
//     await friend.save();
//     res.json({ message: 'Friend request sent' });
// });

// app.post('/accept-friend-request', async (req, res) => {
//     const { token, friendId } = req.body;
//     const { user } = jwt.verify(token, 'secret');
//     const currentUser = await User.findById(user);

//     if (!currentUser.friendRequests.includes(friendId)) {
//         return res.status(400).json({ message: 'No friend request from this user' });
//     }

//     currentUser.friends.push(friendId);
//     currentUser.friendRequests = currentUser.friendRequests.filter(id => id.toString() !== friendId);
//     await currentUser.save();

//     const friend = await User.findById(friendId);
//     friend.friends.push(user);
//     await friend.save();

//     res.json({ message: 'Friend request accepted' });
// });

// app.get('/friends', async (req, res) => {
//     const { token } = req.query;
//     const { user } = jwt.verify(token, 'secret');
//     const userInfo = await User.findById(user).populate('friends');
//     res.json(userInfo.friends.map(friend => ({
//         username: friend.username,
//         location: friend.shareLocation ? friend.location : null
//     })));
// });

// app.post('/toggle-share-location', async (req, res) => {
//     const { token, shareLocation } = req.body;
//     const { user } = jwt.verify(token, 'secret');
//     await User.findByIdAndUpdate(user, { shareLocation });
//     res.json({ message: 'Share location status updated' });
// });

// //API để lấy danh sách các lời mời kết bạn
// app.get('/friend-requests', async (req, res) => {
//     const { token } = req.query;
//     const { user } = jwt.verify(token, 'secret');
//     const userInfo = await User.findById(user).populate('friendRequests');
//     res.json(userInfo.friendRequests.map(request => ({
//         id: request._id,
//         username: request.username,
//         name: request.name,
//         email: request.email,
//     })));
// });
// // API để chấp nhận lời mời kết bạn
// app.post('/accept-friend-request', async (req, res) => {
//     const { token, friendId } = req.body;
//     const { user } = jwt.verify(token, 'secret');
//     const currentUser = await User.findById(user);

//     if (!currentUser.friendRequests.includes(friendId)) {
//         return res.status(400).json({ message: 'No friend request from this user' });
//     }

//     currentUser.friends.push(friendId);
//     currentUser.friendRequests = currentUser.friendRequests.filter(id => id.toString() !== friendId);
//     await currentUser.save();

//     const friend = await User.findById(friendId);
//     friend.friends.push(user);
//     await friend.save();

//     res.json({ message: 'Friend request accepted' });
// });


// // API để từ chối lời mời kết bạn
// app.post('/reject-friend-request', async (req, res) => {
//     const { token, friendId } = req.body;
//     const { user } = jwt.verify(token, 'secret');
//     const currentUser = await User.findById(user);

//     if (!currentUser.friendRequests.includes(friendId)) {
//         return res.status(400).json({ message: 'No friend request from this user' });
//     }

//     currentUser.friendRequests = currentUser.friendRequests.filter(id => id.toString() !== friendId);
//     await currentUser.save();

//     res.json({ message: 'Friend request rejected' });
// });








// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
///////////////////////////////////////




const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/traveltogether', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
// });

mongoose.connect('mongodb://localhost:27017/traveltogether');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    username: { type: String, unique: true },
    password: String,
    location: {
        lat: Number,
        lng: Number
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    shareLocation: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const token = jwt.sign({ userId: user._id }, 'secret');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/register', async (req, res) => {
    const { name, email, phone, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, username, password: hashedPassword });
    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/location', async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'jwt must be provided' });
    }

    try {
        const { user } = jwt.verify(token, 'secret');
        await User.findByIdAndUpdate(user, { location: { lat: req.body.lat, lng: req.body.lng } });
        res.send('Location updated');
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
});

// app.get('/user-info', async (req, res) => {
//     const { token } = req.query;
//     try {
//         const { user } = jwt.verify(token, 'your_jwt_secret');
//         const userInfo = await User.findById(user).populate('friends');

//         if (!userInfo) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({
//             name: userInfo.name,
//             email: userInfo.email,
//             phone: userInfo.phone,
//             username: userInfo.username,
//             location: userInfo.location,
//             friends: userInfo.friends.map(friend => ({ username: friend.username, location: friend.location }))
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });
// cũ


// app.get('/user-info', async (req, res) => {
//     const { token } = req.query;
//     console.log('SERVER.js TOKEN:', token)
//     try {
//         if (!token) {
//             return res.status(401).json({ message: 'Token is required' });
//         }

//         const decoded = jwt.verify(token, 'secret');
//         console.log('SERVER.js DECODED:', decoded);
//         const userInfo = await User.findById(decoded.userId).populate('friends');

//         if (!userInfo) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({
//             name: userInfo.name,
//             email: userInfo.email,
//             phone: userInfo.phone,
//             username: userInfo.username,
//             location: userInfo.location,
//             friends: userInfo.friends.map(friend => ({ username: friend.username, location: friend.location }))
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.get('/user-info', async (req, res) => {
//     const { token } = req.query;
//     console.log('SERVER.js TOKEN:', token);
//     try {
//         if (!token) {
//             return res.status(401).json({ message: 'Token is required' });
//         }

//         const decoded = jwt.verify(token, 'secret');
//         console.log('SERVER.js DECODED:', decoded);
//         const userInfo = await User.findById(decoded.userId).populate('friends');
//         console.log('SERVER.js USER INFO:', userInfo);

//         if (!userInfo) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({
//             name: userInfo.name,
//             email: userInfo.email,
//             phone: userInfo.phone,
//             username: userInfo.username,
//             location: userInfo.location,
//             friends: userInfo.friends.map(friend => ({ username: friend.username, location: friend.location }))
//         });
//     } catch (error) {
//         console.log('SERVER.js ERROR:', error);
//         res.status(500).json({ message: error.message });
//     }
// });
//mới nhất


app.get('/user-info', async (req, res) => {
    const { token } = req.query;
    console.log('SERVER.js TOKEN:', token);
    try {
        if (!token) {
            return res.status(401).json({ message: 'Token is required' });
        }

        const decoded = jwt.verify(token, 'secret');
        console.log('SERVER.js DECODED:', decoded);
        const userInfo = await User.findById(decoded.userId).populate('friends');
        console.log('SERVER.js USER INFO:', userInfo);

        if (!userInfo) {
            return res.status(404).json({ message: 'User not found' });
        }

        const response = {
            name: userInfo.name,
            email: userInfo.email,
            phone: userInfo.phone,
            username: userInfo.username,
            location: userInfo.location,
            friends: userInfo.friends.map(friend => ({ username: friend.username, location: friend.location }))
        };
        console.log('SERVER.js RESPONSE:', response);
        res.json(response);
    } catch (error) {
        console.log('SERVER.js ERROR:', error);
        res.status(500).json({ message: error.message });
    }
});



app.post('/send-friend-request', async (req, res) => {
    const { token, friendUsername, friendEmail } = req.body;
    const { user } = jwt.verify(token, 'secret');
    const friend = await User.findOne({ username: friendUsername, email: friendEmail });

    if (!friend) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (friend.friendRequests.includes(user._id)) {
        return res.status(400).json({ message: 'Friend request already sent' });
    }

    friend.friendRequests.push(user._id);
    await friend.save();
    res.json({ message: 'Friend request sent' });
});

app.post('/accept-friend-request', async (req, res) => {
    const { token, friendId } = req.body;
    const { user } = jwt.verify(token, 'secret');
    const currentUser = await User.findById(user);

    if (!currentUser.friendRequests.includes(friendId)) {
        return res.status(400).json({ message: 'No friend request from this user' });
    }

    currentUser.friends.push(friendId);
    currentUser.friendRequests = currentUser.friendRequests.filter(id => id.toString() !== friendId);
    await currentUser.save();

    const friend = await User.findById(friendId);
    friend.friends.push(user);
    await friend.save();

    res.json({ message: 'Friend request accepted' });
});

app.get('/friends', async (req, res) => {
    const { token } = req.query;
    const { user } = jwt.verify(token, 'secret');
    const userInfo = await User.findById(user).populate('friends');
    res.json(userInfo.friends.map(friend => ({
        username: friend.username,
        location: friend.shareLocation ? friend.location : null
    })));
});

app.post('/toggle-share-location', async (req, res) => {
    const { token, shareLocation } = req.body;
    const { user } = jwt.verify(token, 'secret');
    await User.findByIdAndUpdate(user, { shareLocation });
    res.json({ message: 'Share location status updated' });
});

// API để lấy danh sách các lời mời kết bạn
app.get('/friend-requests', async (req, res) => {
    const { token } = req.query;
    const { user } = jwt.verify(token, 'secret');
    const userInfo = await User.findById(user).populate('friendRequests');
    res.json(userInfo.friendRequests.map(request => ({
        id: request._id,
        username: request.username,
        name: request.name,
        email: request.email,
    })));
});

// API để từ chối lời mời kết bạn
app.post('/reject-friend-request', async (req, res) => {
    const { token, friendId } = req.body;
    const { user } = jwt.verify(token, 'secret');
    const currentUser = await User.findById(user);

    if (!currentUser.friendRequests.includes(friendId)) {
        return res.status(400).json({ message: 'No friend request from this user' });
    }

    currentUser.friendRequests = currentUser.friendRequests.filter(id => id.toString() !== friendId);
    await currentUser.save();

    res.json({ message: 'Friend request rejected' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});