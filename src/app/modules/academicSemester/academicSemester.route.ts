import express from "express";
import { academicSemesterController } from "./academicSemester.controller";
import validationRequest from "../../middleware/validateRequest";
import { academicSemesterValidation } from "./academicSemester.validation";

const route = express.Router();

//will call controller function
route.post(
  "/create-academic-semester",
  validationRequest(
    academicSemesterValidation.academicSemesterValidationSchema
  ),
  academicSemesterController.createAcademicSemester
);

route.get("/", academicSemesterController.getAllAcademicSemesters);
route.get("/:id", academicSemesterController.getAcademicSemestersById);
route.patch("/:id", academicSemesterController.updateAcademicSemestersById);

export const academicSemesterRoute = route;
