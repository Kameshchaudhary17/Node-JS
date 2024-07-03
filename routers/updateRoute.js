import express from "express"

import {update} from "../controllers/update.js";

const updateRouter = express.Router();

updateRouter.put("/update", update)

export default updateRouter;

