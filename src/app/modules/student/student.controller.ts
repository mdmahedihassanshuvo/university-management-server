/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { studentServices } from "./student.service";
import sendRespoonse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getStudents = catchAsync(async (req, res, next) => {
  const query = req.query;
  const result = await studentServices.getAllStudentFromDB(query);

  sendRespoonse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get All Student successfully",
    data: result,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await studentServices.getOneStudentFromDB(studentId);
  sendRespoonse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Student successfully",
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await studentServices.updateStudentIntoDB(studentId, student);
  sendRespoonse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete Student successfully",
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentFromDB(studentId);
  sendRespoonse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete Student successfully",
    data: result,
  });
});

export const studentController = {
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
