import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find();
  return result;
};

const getAcademicDepartmentByIdFromDB = async (id: string) => {
  const result = await AcademicDepartment.findOne({ _id: id });
  return result;
};

const updateAcademicDepartmentByIdIntoDB = async (
  id: string,
  updateDepartment: TAcademicDepartment
) => {
  const result = await AcademicDepartment.updateOne({ _id: id }, updateDepartment, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentsFromDB,
    getAcademicDepartmentByIdFromDB,
    updateAcademicDepartmentByIdIntoDB
};
