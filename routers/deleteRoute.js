import express from "express";

import {delete1} from "../controllers/delete.js";

const deleteRouter = express.Router();

deleteRouter.delete("/delete", delete1)

export default deleteRouter;