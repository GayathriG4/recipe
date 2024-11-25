const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to the database!');

        app.listen(process.env.PORT, () => {
            console.log(`Server is running @ http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Connection failed!');
        console.log(error);
    });
