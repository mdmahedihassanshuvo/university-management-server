/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from "express";
import sendRespoonse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    // const { password, student: studentData } = req.body;
    // const result = await userService.createStudentIntoDB(password, studentData);
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student created successfully",
      data: null,
    });
  }
);

export const academicSemesterController = {
  createAcademicSemester,
};
