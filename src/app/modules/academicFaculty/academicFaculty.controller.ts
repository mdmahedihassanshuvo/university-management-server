/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from "express";
import sendRespoonse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
      req.body
    );
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic-faculty created successfully",
      data: result,
    });
  }
);

const getAllAcademicFaculty: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result =
      await AcademicFacultyServices.getAllAcademicFacultiesFromDB();

    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get all Academic-faculty successfully",
      data: result,
    });
  }
);

const getAcademicFacultyById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const result =
      await AcademicFacultyServices.getAcademicFacultyByIdFromDB(id);
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get Academic-faculty by id successfully",
      data: result,
    });
  }
);

const updateAcademicFacultyById: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const updateSemester = req.body;
    const result =
      await AcademicFacultyServices.updateAcademicFacultyByIdIntoDB(
        id,
        updateSemester
      );
    sendRespoonse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update Academic-faculty by id successfully",
      data: result,
    });
  }
);

export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getAcademicFacultyById,
  updateAcademicFacultyById,
};
