import express from "express"
import { createBill } from "../controller/billController.js";


const router = express.Router();

router.post("/createBill" , createBill);


export default router