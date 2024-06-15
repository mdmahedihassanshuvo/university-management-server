import { TAcademicSemester } from "../academicSemester/acdemicSemester.interface";
import { User } from "./user.model";

const findLastStudent = async () => {
  const lastStudent = await User.findOne(
    {
      role: "student",
    },
    {
      _id: 0,
      id: 1,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent?.id : undefined;
};

//year semestercode 4-digit number
export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString(); // 0000 default value

  const lastStudentId = await findLastStudent();
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const lastStudentCode = lastStudentId?.substring(4, 6);

  const currentYear = payload.year;
  const currentCode = payload.code;

  if (
    lastStudentId &&
    lastStudentCode === currentCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId?.substring(6);
  }
  let increment = (Number(currentId) + 1).toString().padStart(4, "0");
  increment = `${payload.year}${payload.code}${increment}`;
  return increment;
};
