import config from "../../config";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { Student } from "../student/student.model";
import { AcademinSemester } from "../academicSemester/academicSemester.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  //if password is not provided then use default password
  userData.password = password || (config.defaultPassword as string);
  userData.role = "student";

  const admissionSemester = await AcademinSemester.findById(
    payload.admissionSemester
  );

  userData.id = await generateStudentId(admissionSemester);

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length > 0) {
    payload.id = newUser.id; // embedded id
    payload.user = newUser._id; // reference _id
    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
