import express from 'express';

const simpleRouter = express.Router();

simpleRouter.get('/test', (req, res) => {
  res.send('Simple route works');
});

export default simpleRouter;
