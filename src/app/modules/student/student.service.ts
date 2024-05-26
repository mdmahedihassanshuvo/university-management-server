import { Student } from "./student.model";

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getOneStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentServices = {
  getAllStudentFromDB,
  getOneStudentFromDB,
};
