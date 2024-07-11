import express from "express"
import { createBill, getallBill } from "../controller/billController.js";


const router = express.Router();

router.post("/createBill" , createBill);
router.get("/getall" , getallBill);


export default router