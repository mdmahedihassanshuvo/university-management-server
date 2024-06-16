import express from "express";
import validationRequest from "../../middleware/validateRequest";
import { academicDepartmentValidation } from "./academicDepartment.validation";
import { academicDepartmentController } from "./academicDepartment.controller";
const route = express.Router();

//will call controller function
route.post(
  "/create-academic-department",
  validationRequest(
    academicDepartmentValidation.createAcademicDepartmentValidationSchema
  ),
  academicDepartmentController.createAcademicDepartment
);

route.get("/", academicDepartmentController.getAllAcademicDepartments);
route.get("/:id", academicDepartmentController.getAcademicDepartmentById);
route.patch("/:id", academicDepartmentController.updateAcademicDepartmentById);

export const academicDepartmentRoute = route;
