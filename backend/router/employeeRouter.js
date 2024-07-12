import express from "express"
import { deleteEmployee, getallEmployee, getEmployee, login,  Logout,  register, updateEmployee } from "../controller/employeeController.js";
import { isadminAuthenticated, isemployeeAuthenticated } from "../middleware/auth.js";


const router = express.Router();

router.post("/register", isadminAuthenticated ,  register);
router.post("/login", login);
router.get("/me/:id",  getEmployee);
router.put("/me/update/:id" , isadminAuthenticated , updateEmployee);
router.post("/Logout" , isemployeeAuthenticated ,   Logout);
router.delete("/me/:id" , isadminAuthenticated , deleteEmployee);
router.get("/getall" , getallEmployee);



export default router 