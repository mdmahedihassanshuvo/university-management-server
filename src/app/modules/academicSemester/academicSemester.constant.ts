import { TAcademicSemesterCode, TAcademicSemesterName, TAemesterNameCodeMapper, TMonth } from "./acdemicSemester.interface";

export const Months: TMonth[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  export const AcademicSemesterName: TAcademicSemesterName[] = [
    "Autumn",
    "Fall",
    "Summar",
  ];
  
  export const AcademicSemesterCode: TAcademicSemesterCode[] = ["01", "02", "03"];

  export const semesterNameCodeMapper: TAemesterNameCodeMapper = {
    Autumn: "01",
    Summer: "02",
    Fall: "03",
  };