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

  return lastStudent?.id ? lastStudent?.id.substring(6) : undefined;
};

//year semestercode 4-digit number
export const generateStudentId = async (payload: TAcademicSemester) => {

  const currentId = await findLastStudent() || (0).toString();
  let increment = (Number(currentId) + 1).toString().padStart(4, "0");
  increment = `${payload.year}${payload.code}${increment}`;
  return increment;
};
