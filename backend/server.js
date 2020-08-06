const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const URI = process.env.ATLAS_URI
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

const aerobicExerciseRouter = require('./routes/exercise_types/aerobic')
const usersRouter = require('./routes/users')
const exercisesRouter = require('./routes/exercises')

//app.use('/exercises', exercisesRouter);
app.use('/exercises/aerobic', aerobicExerciseRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
