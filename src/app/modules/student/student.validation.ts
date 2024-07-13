import { z } from "zod";

const userNameZodSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: "First name cannot exceed 20 characters" })
    .regex(/^[A-Za-z]+$/, { message: "First name can only contain letters" })
    .min(1, {
      message: "First name is required. Please provide the first name.",
    }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, {
    message: "Last name is required. Please provide the last name.",
  }),
});

const guardianValidationSchema = z.object({
  fatherName: z
    .string()
    .min(1, { message: "Please provide the father's name" }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Please provide the father's contact number" }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Please provide the father's occupation" }),
  motherName: z
    .string()
    .min(1, { message: "Please provide the mother's name" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Please provide the mother's contact number" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Please provide the mother's occupation" }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required. Please provide the name of the local guardian.",
  }),
  contactNo: z.string().min(1, {
    message:
      "Contact number is required. Please provide the contact number of the local guardian.",
  }),
  occupation: z.string().min(1, {
    message:
      "Occupation is required. Please provide the occupation of the local guardian.",
  }),
  address: z.string().min(1, {
    message:
      "Address is required. Please provide the address of the local guardian.",
  }),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(12).optional(),
    student: z.object({
      name: userNameZodSchema,
      gender: z
        .enum(["male", "female"], { message: "{VALUE} is not a valid gender" })
        .refine((value) => value.length > 0, { message: "Gender is required" }),
      age: z.number(),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: "{VALUE} is not a valid email" }),
      contactNo: z.string(),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
          message: "{VALUE} is not a valid blood group",
        })
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: "Present Address is required" }),
      permanentAddress: z
        .string()
        .min(1, { message: "Permanent Address is required" }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      academicDepartment: z.string(),
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

const updatedUserNameSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: "First name cannot exceed 20 characters" })
    .regex(/^[A-Za-z]+$/, { message: "First name can only contain letters" })
    .optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updatedGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherContactNo: z.string().optional(),
  fatherOccupation: z.string().optional(),
  motherName: z.string().optional(),
  motherContactNo: z.string().optional(),
  motherOccupation: z.string().optional(),
});

const updatedLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  contactNo: z.string().optional(),
  occupation: z.string().optional(),
  address: z.string().optional(),
});

const updateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(12).optional(),
    student: z
      .object({
        name: updatedUserNameSchema.optional(),
        gender: z
          .enum(["male", "female"], {
            message: "{VALUE} is not a valid gender",
          })
          .optional(),
        age: z.number().optional(),
        dateOfBirth: z.string().optional(),
        email: z
          .string()
          .email({ message: "{VALUE} is not a valid email" })
          .optional(),
        contactNo: z.string().optional(),
        bloodGroup: z
          .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
            message: "{VALUE} is not a valid blood group",
          })
          .optional(),
        presentAddress: z.string().optional(),
        permanentAddress: z.string().optional(),
        guardian: updatedGuardianValidationSchema.optional(),
        localGuardian: updatedLocalGuardianValidationSchema.optional(),
        academicDepartment: z.string().optional(),
        admissionSemester: z.string().optional(),
        profileImg: z.string().optional(),
      })
      .optional(),
  }),
});

export const studentValidationSchema = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
