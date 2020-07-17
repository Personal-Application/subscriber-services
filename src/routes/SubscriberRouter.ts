import express, { Router } from 'express';
const router = express.Router();

/* GET Base */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

const subscriberRouter : Router = router;
export default subscriberRouter;
