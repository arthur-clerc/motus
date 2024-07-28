const mongoose = require('mongoose');
const User = require('../models/User');
const Score = require('../models/Score');
const Word = require('../models/Word');
const config = require('config');
const db = config.get('mongoURI');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const seed = async () => {
    try {
        await User.create([
            { username: 'john_doe', password: 'hashedpassword123' },
            { username: 'jane_doe', password: 'hashedpassword456' }
        ]);
        
        await Word.create([
            { word: 'apple' },
            { word: 'banana' },
            { word: 'cherry' }
        ]);

        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
};

seed();
