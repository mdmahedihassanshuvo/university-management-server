import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultiesFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getAcademicFacultyByIdFromDB = async (id: string) => {
  const result = await AcademicFaculty.findOne({ _id: id });
  return result;
};

const updateAcademicFacultyByIdIntoDB = async (
  id: string,
  updateFaculty: TAcademicFaculty
) => {
  const result = await AcademicFaculty.updateOne({ _id: id }, updateFaculty, {
    new: true,
  });
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getAcademicFacultyByIdFromDB,
  updateAcademicFacultyByIdIntoDB,
};
