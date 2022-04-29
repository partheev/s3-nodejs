import { NextFunction, Request, Response } from 'express'

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    const statusCode = 400
    res.status(statusCode).send({ message: err.message })
}
