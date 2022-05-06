import express, { json, Request, Response } from 'express';

// Development server for testing the mailing functionality without requiring
// to run on AWS Lambda.
const app = express();

app.use(json());

app.post('/', async (req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
