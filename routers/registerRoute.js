import express from "express";

import { register } from "../controllers/register.js";

const registerRouter = express.Router();

registerRouter.post("/register", register)

export default registerRouter