import "reflect-metadata";
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from "./routes/user.routes";
import creditcardRoutes from "./routes/creditcard.routes"
import loginRoutes from "./routes/login.routes";
import { createConnection } from "typeorm";

const app = express()
createConnection();
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(userRoutes,creditcardRoutes,loginRoutes)

app.listen(3000);
console.log('Server on port',3000);
