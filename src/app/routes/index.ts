import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { studentRouter } from "../modules/student/student.route";
import { academicSemesterRoute } from "../modules/academicSemester/academicSemester.route";

const moduleRoutes = [
  {
    path: "/users",
    router: userRoutes,
  },
  {
    path: "/students",
    router: studentRouter,
  },
  {
    path: "/academic-semester",
    router: academicSemesterRoute,
  },
];

const router = Router();

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
