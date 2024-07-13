import { Schema, model } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentName,
} from "./student.interface";
import AppError from "../../errors/appError";
import httpStatus from "http-status";

// 2. Create a Schema corresponding to the document interface.
export const userNameSchema = new Schema<TStudentName>(
  {
    firstName: {
      type: String,
      trim: true,
      maxlength: 20,
      required: [
        true,
        "First name is required. Please provide the first name.",
      ],
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Last name is required. Please provide the last name."],
    },
  },
  {
    _id: false,
  }
);

export const guardianSchema = new Schema<TGuardian>(
  {
    fatherName: {
      type: String,
      trim: true,
      required: [true, "Please provide the father's name"],
    },
    fatherContactNo: {
      type: String,
      trim: true,
      required: [true, "Please provide the father's contact number"],
    },
    fatherOccupation: {
      type: String,
      trim: true,
      required: [true, "Please provide the father's occupation"],
    },
    motherName: {
      type: String,
      trim: true,
      required: [true, "Please provide the mother's name"],
    },
    motherContactNo: {
      type: String,
      trim: true,
      required: [true, "Please provide the mother's contact number"],
    },
    motherOccupation: {
      type: String,
      trim: true,
      required: [true, "Please provide the mother's occupation"],
    },
  },
  {
    _id: false,
  }
);

export const localGuardianSchema = new Schema<TLocalGuardian>(
  {
    name: {
      type: String,
      trim: true,
      required: [
        true,
        "Name is required. Please provide the name of the local guardian.",
      ],
    },
    contactNo: {
      type: String,
      trim: true,
      required: [
        true,
        "Contact number is required. Please provide the contact number of the local guardian.",
      ],
    },
    occupation: {
      type: String,
      trim: true,
      required: [
        true,
        "Occupation is required. Please provide the occupation of the local guardian.",
      ],
    },
    address: {
      type: String,
      trim: true,
      required: [
        true,
        "Address is required. Please provide the address of the local guardian.",
      ],
    },
  },
  {
    _id: false,
  }
);

export const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: [true, "Gender is required"],
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not a valid gender",
    },
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  dateOfBirth: {
    type: String,
    trim: true,
    required: [true, "Date of Birth is required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
    unique: true,
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, "Contact Number is required"],
  },
  emergencyContactNo: {
    type: String,
    trim: true,
    required: [true, "Contact Number is required"],
  },
  bloodGroup: {
    type: String,
    trim: true,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not a valid blood group",
    },
  },
  presentAddress: {
    type: String,
    trim: true,
    required: [true, "Present Address is required"],
  },
  permanentAddress: {
    type: String,
    trim: true,
    required: [true, "Permanent Address is required"],
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: {
    type: String,
    trim: true,
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: "AcademicDepartment",
  },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemester",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// 3. Create a Model for products.
export const Student = model<TStudent>("Student", studentSchema);
