import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pool from './server/config/database/db.js';
import userRouter from './server/api/users/userRouter.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 80;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter)
app.use("/user/forgot_password/:token", userRouter);
app.use("/user/answers", userRouter);
app.use('/user/questions', userRouter)
app.use('/username', userRouter)
app.use('/username/id', userRouter)
app.use('/questions/byname', userRouter)

 

  
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://forum-frontend-74z.pages.dev');
//   next();
// });

app.use(cors({
  origin: 'https://26823ef7.evangadi-forum-frontend.pages.dev',
}));
  // Start the server
app.listen(port, "0.0.0.0", () => console.log(`Server listening on port http://localhost:${port}`));





