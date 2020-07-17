import {Request, Response, NextFunction} from 'express';
import ApiController from './ApiController';
import subscribers from '../resources/subscriber.json';

export default class SubscriberController extends ApiController {
    
    constructor()
    {
        super()
    }

    async get(req: Request, res: Response, next: NextFunction)
    {
        const phoneNumber = req.params.phoneNumber;
        if (phoneNumber.length != 11)
        {
            return res.type('application/json').status(this.HTTP_OK).send(this.response([], this.HTTP_OK, phoneNumber + ' : Phone Number must have 11 digits'));   
        }

        const subscriberList = subscribers.subscribers;

        try {
            await new Promise(resolve => { 
                //Check list if phone number exist
                for (let i = 0; i < subscriberList.length; i++) {
                    if ( subscriberList[i].phoneNumber == phoneNumber) {
                        let subscriberDetails:any = subscriberList[i];
                        return res.type('application/json').status(this.HTTP_OK).send(this.response(subscriberDetails, this.HTTP_OK, 'Subscriber Found'));   
                    }
                }
                return res.type('application/json').status(this.HTTP_OK).send(this.response([], this.HTTP_OK, 'No Subscriber Found'));   
            });
        } catch (error) {
            this.internalErrorResponse(error, res, next);
        }
        
    }

}