import express from 'express';
import testRouter from './src/routes/testRoute.js';
import simpleRouter from './src/routes/simpleRoute.js';
import userRoute from './src/routes/userRoute.js';
// import pgSql from './src/config/db';

const app = express()

app.use('/api', testRouter);
app.use('/simple', simpleRouter);
app.use('/api', userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});