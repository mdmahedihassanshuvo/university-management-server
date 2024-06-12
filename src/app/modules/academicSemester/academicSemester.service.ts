import { semesterNameCodeMapper } from "./academicSemester.constant";
import { AcademinSemester } from "./academicSemester.model";
import { TAcademicSemester } from "./acdemicSemester.interface";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (semesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Academic Semester Name and Code are not matching");
  }

  const result = await AcademinSemester.create(payload);
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademinSemester.find();
  return result;
};

const getAcademicSemestersByIdFromDB = async (id: string) => {
  const result = await AcademinSemester.findOne({ _id: id });
  return result;
};

const updateAcademicSemestersByIdIntoDB = async (
  id: string,
  updateSemester: TAcademicSemester
) => {
  const result = await AcademinSemester.updateOne({ _id: id }, updateSemester, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getAcademicSemestersByIdFromDB,
  updateAcademicSemestersByIdIntoDB,
};
