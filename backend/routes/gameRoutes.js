const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getWord, submitScore, getScores } = require('../controllers/gameController');

router.get('/word', auth, getWord);
router.post('/score', auth, submitScore);
router.get('/scores', getScores);

module.exports = router;