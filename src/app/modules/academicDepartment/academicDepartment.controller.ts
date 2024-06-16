/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from "express";
import sendRespoonse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result =
      await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic-department created successfully",
      data: result,
    });
  }
);

const getAllAcademicDepartments: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result =
      await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();

    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get all Academic-department successfully",
      data: result,
    });
  }
);

const getAcademicDepartmentById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const result =
      await AcademicDepartmentServices.getAcademicDepartmentByIdFromDB(id);
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get Academic-department by id successfully",
      data: result,
    });
  }
);

const updateAcademicDepartmentById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const updateSemester = req.body;
    const result =
      await AcademicDepartmentServices.updateAcademicDepartmentByIdIntoDB(
        id,
        updateSemester
      );
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update Academic-department by id successfully",
      data: result,
    });
  }
);

export const academicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getAcademicDepartmentById,
  updateAcademicDepartmentById,
};
