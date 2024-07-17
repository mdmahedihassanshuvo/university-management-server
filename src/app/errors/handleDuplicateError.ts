/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const expectedMessage = match && match[1];
  const errorSources: TErrorSources = [
    {
      path: "",
      message: `${expectedMessage} is already exists`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: `${expectedMessage} Invalid !`,
    errorSources,
  };
};

export default handleDuplicateError;
