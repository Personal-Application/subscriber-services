import express, { Request, Response, Router, NextFunction } from 'express';

import SubscriberController from '../controllers/SubscriberController'

const router = express.Router();
const subscriberController = new SubscriberController();

/* GET Base */
router.get('/:phoneNumber', (req: Request, res: Response, next: NextFunction) => {
  subscriberController.get(req, res, next);
});

const subscriberRouter : Router = router;
export default subscriberRouter;
