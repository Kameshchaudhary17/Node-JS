import express from "express";

import {read} from "../controllers/read.js";

const readRouter = express.Router();

readRouter.get("/read", read)

export default readRouter;