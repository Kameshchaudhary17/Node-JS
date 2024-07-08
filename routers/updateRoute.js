import express from "express"

import {update} from "../controllers/update.js";

const updateRouter = express.Router();

updateRouter.post("/update", update)

export default updateRouter;

