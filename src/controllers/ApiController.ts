import { Response, NextFunction } from 'express';

export default class ApiController {

    HTTP_OK = 200;
    HTTP_NOT_FOUND = 404;
    HTTP_INTERNAL_SERVER_ERROR = 500;

    response(jsonData : any, statusCode : number, message: string ) {
        return {
            "status_code" : statusCode,
            "message" : message,
            "data" : jsonData
        }
    }

    internalErrorResponse(err: any, res: Response, next: NextFunction)
    {
        res.status(this.HTTP_INTERNAL_SERVER_ERROR).send(this.response([], this.HTTP_INTERNAL_SERVER_ERROR, err));
        next(err);
    }
    
}