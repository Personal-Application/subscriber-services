import Response, { json } from 'express';

export default class ApiController {

    HTTP_OK = 200;
    HTTP_NOT_FOUND = 404

    response(jsonData : any, statusCode : number, message: string ) {
        return {
            "status_code" : statusCode,
            "message" : message,
            "data" : jsonData
        }
    }
}