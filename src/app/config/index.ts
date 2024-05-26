import dotenv from "dotenv"
import path from "path"

dotenv.config({path: path.join(process.cwd(), '.env') })

export default{
    port: process.env.PORT,
    baseUrl: process.env.BASE_URL,
    defaultPassword: process.env.DEFAULT_PASSWORD
}