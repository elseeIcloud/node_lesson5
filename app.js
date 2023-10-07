const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(bodyParser.json());

sequelize
    .sync()
    .then(() => {
        console.log('Соединение с базой данных установлено');
    })
    .catch((err) => {
        console.error('Ошибка подключения к базе данных:', err);
    });

app.use((err, req, res, next) => {
    console.error('Ошибка:', err);
    res.status(500).send('Внутренняя ошибка сервера');
});

app.use('/tasks', taskRoutes);

const PORT = 3000;

app.listen(PORT);
