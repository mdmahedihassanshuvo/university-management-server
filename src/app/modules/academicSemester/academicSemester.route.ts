import express from "express";
import { academicSemesterController } from "./academicSemester.controller";

const route = express.Router();

//will call controller function
route.get("/create-academic-semester", academicSemesterController.createAcademicSemester);
// route.get("/:studentId", studentController.getStudent);

export const academicSemesterRoute = route;
