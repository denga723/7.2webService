const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/clothing', (req, res) => {
    const { category, color } = req.query;

    if (!category || !color) {
        return res.status(400).send("Please provide both 'category' and 'color' query parameters.");
    }

    res.send(`You requested ${color} ${category} clothing.`);
});


app.get('/courses/:department/:level', (req, res) => {
    const { department, level } = req.params;

    if (!department || !level) {
        return res.status(400).send("Please provide both 'department' and 'level' in the URL.");
    }

    res.send(`You are viewing courses for the ${department} department at level ${level}.`);
});


app.get('*', (req, res) => {
    res.send("Welcome to the Web Service! Please use /clothing or /courses routes.");
});


app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
