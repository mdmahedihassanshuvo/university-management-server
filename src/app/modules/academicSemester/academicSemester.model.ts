/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./acdemicSemester.interface";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academicSemester.constant";
import AppError from "../../error/appError";

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExist = await AcademinSemester.findOne({
    name: this.name,
    year: this.year,
  });

  if (isSemesterExist) {
    throw new AppError(404,"Academic Semester already exist");
  }
});

export const AcademinSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
