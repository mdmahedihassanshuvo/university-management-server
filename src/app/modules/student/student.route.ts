import express from 'express';
import { studentController } from './student.controller';

const route = express.Router();

//will call controller function
route.get('/', studentController.getStudents);
route.get('/:studentId', studentController.getStudent);

export const studentRouter = route;
