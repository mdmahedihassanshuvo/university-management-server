
import config from "../../config";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { Student } from "../student/student.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  //if password is not provided then use default password
  userData.password = password || (config.defaultPassword as string);
  userData.role = "student";
  userData.id = "20234203001";

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length > 0) {
    studentData.id = newUser.id; // embedded id
    studentData.user = newUser._id; // reference _id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
