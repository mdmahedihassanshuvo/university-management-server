import express from "express";
import { userController } from "./user.controller";
import validationRequest from "../../middleware/validateRequest";
import { studentValidationSchema } from "../student/student.validation";

const router = express.Router();

router.post(
  "/create-student",
  validationRequest(studentValidationSchema.createStudentValidationSchema),
  userController.createStudent
);

export const userRoutes = router;
