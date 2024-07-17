/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import AppError from "../../errors/appError";

export const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  }
);

// academicDepartmentSchema.pre("save", async function (next) {
//   const isAcademicDepartmentExist = await AcademicDepartment.findOne({
//     name: this.name,
//   });
//   if (isAcademicDepartmentExist) {
//     throw new AppError(404, "Academic Department already exists !");
//   }

//   next();
// });

academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  // console.log(query);
  const isAcademicDepartmentExist = await AcademicDepartment.findOne(query);
  if (!isAcademicDepartmentExist) {
    throw new AppError(404, "Academic Department not found");
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema
);
