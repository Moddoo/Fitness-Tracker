const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const htmlRouter = require('./routes/html-routes');
const apiRouter = require('./routes/api-routes')

const port = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('./Develop/public'));
app.use(htmlRouter)
app.use('/api/workouts',apiRouter)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });


app.listen(port, () => console.log(`listening to ${port}!`))