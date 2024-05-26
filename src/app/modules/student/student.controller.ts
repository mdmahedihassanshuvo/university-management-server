import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import sendRespoonse from "../../utils/sendResponse";
import httpStatus from "http-status";

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentServices.getAllStudentFromDB();

    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getOneStudentFromDB(studentId);
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getStudents,
  getStudent,
};
