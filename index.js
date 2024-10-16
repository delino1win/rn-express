import express from 'express';
import testRouter from './src/routes/testRoute.js';
import simpleRouter from './src/routes/simpleRoute.js';
import userRoute from './src/routes/userRoute.js';
// import pgSql from './src/config/db';

const app = express()

//Add this syntax to enable parsing data json for example through postman
app.use(express.json())

app.use('/api', testRouter);
app.use('/api', userRoute)
app.use('/simple', simpleRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});