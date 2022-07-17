import { AxiosError } from "axios";
import { Response, Request, NextFunction } from "express";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AxiosError) {
    return res.status(404).json({
      status: 404,
      message: err.message
    })
  }
  res.status(500).json({
    status: 500,
    message: err.message
  });
};
