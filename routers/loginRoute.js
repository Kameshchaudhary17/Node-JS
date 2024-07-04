import express from "express";

import { login } from "../controllers/login.js";

const loginRouter = express.Router()

loginRouter.get("/login",login)

export default loginRouter;
