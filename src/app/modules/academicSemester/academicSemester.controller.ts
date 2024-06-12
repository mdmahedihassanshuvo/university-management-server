/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from "express";
import sendRespoonse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      req.body
    );
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic-Semester created successfully",
      data: null,
    });
  }
);

const getAllAcademicSemesters: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result =
      await AcademicSemesterServices.getAllAcademicSemestersFromDB();

    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get all Academic-Semester successfully",
      data: result,
    });
  }
);

const getAcademicSemestersById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const result =
      await AcademicSemesterServices.getAcademicSemestersByIdFromDB(id);
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get Academic-Semester by id successfully",
      data: result,
    });
  }
);

const updateAcademicSemestersById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const updateSemester = req.body;
    const result =
      await AcademicSemesterServices.updateAcademicSemestersByIdIntoDB(id, updateSemester);
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update Academic-Semester by id successfully",
      data: result,
    });
  }
);

export const academicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getAcademicSemestersById,
  updateAcademicSemestersById,
};
