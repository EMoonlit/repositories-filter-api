import { Response, Request, NextFunction } from "express";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({
    status: 500,
    message: err.message
  });
};
