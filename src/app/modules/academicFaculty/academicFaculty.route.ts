import { academicFacultyValidation } from './academicFaculty.validation';
import express from "express";import validationRequest from "../../middleware/validateRequest";
import { academicFacultyController } from './academicFaculty.controller';
;

const route = express.Router();

//will call controller function
route.post(
  "/create-academic-faculty",
  validationRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema
  ),
  academicFacultyController.createAcademicFaculty
);

route.get("/", academicFacultyController.getAllAcademicFaculty);
route.get("/:id", academicFacultyController.getAcademicFacultyById);
route.patch("/:id", academicFacultyController.updateAcademicFacultyById);

export const academicFacultyRoute = route;
