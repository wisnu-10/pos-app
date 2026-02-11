import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import AppError from "../helpers/app-error.helper";


export function expressRequestValidation(req: Request, res: Response, next: NextFunction) {
    const error = validationResult(req);

    if (!error?.isEmpty()) throw AppError(error?.array()[0].msg, 400);

    next();
}