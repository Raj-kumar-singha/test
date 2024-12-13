const express = require('express'),
    app = express(),
    dotenv = require('dotenv'),
    obj = require('./models/index'),
    cors = require('cors');
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use((req, res, next) => {
    res.status(404).json({
        error: 'Bad Request',
    });
});

obj.sequelize
    .sync()
    .then(() => {
        console.log('Synced db.');
    })
    .catch((err) => {
        console.log('Failed to sync db: ' + err.message);
    });

app.listen(process.env.PORT || 4040, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT} || 4040`);
});