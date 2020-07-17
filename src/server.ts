import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from 'config';
import dotenv  from 'dotenv';

import subscriberRouter from './routes/SubscriberRouter';
import ApiController from './controller/ApiController'

var app = express();
const api = new ApiController();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(config.get("apiPrefix") + "subscriber", subscriberRouter);

// handle non existent routes
app.get('*', (req, res) => {
  return res.type('application/json').status(404).send(api.response([], 404, '404 Not Found'));
});

// Listener
const port = 3000; //Or port from env (process.env.PORT)
app.listen(port, () => console.log('Server Running. Listening on port ' + port));

