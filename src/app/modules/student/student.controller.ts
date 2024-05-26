import { Request, Response } from 'express';
import { studentServices } from './student.service';
// import studentJoiSchema from './student.joiValidation';



const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();

    //send response
    res.status(200).json({
      success: true,
      message: 'Student data get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getOneStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student data get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  getStudents,
  getStudent,
};
