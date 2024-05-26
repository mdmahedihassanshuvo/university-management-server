import { Request, Response } from "express";
import { userService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await userService.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  createStudent,
};
