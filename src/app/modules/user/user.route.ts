import express from "express";
import { userController } from "./user.controller";
import createStudentValidationSchema from "../student/student.validation";
import validationRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post(
  "/create-student",
  validationRequest(createStudentValidationSchema),
  userController.createStudent
);

export const userRoutes = router;
