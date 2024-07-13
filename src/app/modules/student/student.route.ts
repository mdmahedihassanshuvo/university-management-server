import express from 'express';
import { studentController } from './student.controller';
import validationRequest from '../../middleware/validateRequest';
import { studentValidationSchema } from './student.validation';

const route = express.Router();

//will call controller function
route.get('/', studentController.getStudents);
route.get('/:studentId', studentController.getStudent);
route.patch('/:studentId', validationRequest(studentValidationSchema.updateStudentValidationSchema), studentController.updateStudent);
route.delete('/:studentId', studentController.deleteStudent);

export const studentRouter = route;
