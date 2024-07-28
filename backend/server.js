const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Définir les routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/game', require('./routes/gameRoutes'));

// Servir les fichiers statiques
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Rediriger toutes les autres routes vers index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

