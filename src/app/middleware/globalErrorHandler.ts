/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError, ZodIssue } from "zod";
import { TErrorSources } from "../interface/error";
import handleZodError from "../errors/handleZodError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const gloabalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "something went wrong";

  let errorSources: TErrorSources = [
    {
      path: "",
      message: "something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
    // console.log(simplifiedError)
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
  });
};

export default gloabalErrorHandler;
