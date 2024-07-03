import express from "express";

import {create} from "../controllers/create.js";



const createRouter = express.Router();

createRouter.post("/create", create);


export default createRouter;