import express, { Application } from "express"
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.route"
import { studentRouter } from "./app/modules/student/student.route"
const app: Application = express()

//parser .....
app.use(express.json());
app.use(cors());
app.use(express.text());

app.use('/users', userRoutes)
app.use('/students', studentRouter)
app.get('/', (req, res) => {
  res.send('Welcome to My Application Data Server')
})


export default app