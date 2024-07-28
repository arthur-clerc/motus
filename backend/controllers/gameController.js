const Word = require('../models/Word');
const Score = require('../models/Score');

exports.getWord = async (req, res) => {
    try {
        const count = await Word.countDocuments();
        const random = Math.floor(Math.random() * count);
        const word = await Word.findOne().skip(random);
        res.json({ word: word.word });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.submitScore = async (req, res) => {
    const { score } = req.body;
    try {
        const newScore = new Score({
            user: req.user.id,
            score
        });
        await newScore.save();
        res.json(newScore);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getScores = async (req, res) => {
    try {
        const scores = await Score.find().populate('user', 'username').sort({ score: -1 }).limit(10);
        res.json(scores);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
