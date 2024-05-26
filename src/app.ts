/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.route";
import { studentRouter } from "./app/modules/student/student.route";
import gloabalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";
const app: Application = express();

//parser .....
app.use(express.json());
app.use(cors());
app.use(express.text());

app.use('/api', router)
app.get("/", (req, res) => {
  res.send("Welcome to My Application Data Server");
});

app.use(gloabalErrorHandler);

app.use(notFound);

export default app;
