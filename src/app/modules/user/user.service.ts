import config from "../../config";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { Student } from "../student/student.model";
import { AcademinSemester } from "../academicSemester/academicSemester.model";
import { generateStudentId } from "./user.utils";
import mongoose from "mongoose";
import AppError from "../../error/appError";
import httpStatus from "http-status";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  //if password is not provided then use default password
  userData.password = password || (config.defaultPassword as string);
  userData.role = "student";

  const admissionSemester = await AcademinSemester.findById(
    payload.admissionSemester
  );

  userData.id = await generateStudentId(admissionSemester);

  const session = await mongoose.startSession();
  try {
    await session.startTransaction();
    const newUser = await User.create([userData], { session });

    if (!newUser?.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new user");
    }
    payload.id = newUser[0].id; // embedded id
    payload.user = newUser[0]._id; // reference _id
    const newStudent = await Student.create([payload], { session });
    if (!newStudent?.length) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Failed to create new student"
      );
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userService = {
  createStudentIntoDB,
};
