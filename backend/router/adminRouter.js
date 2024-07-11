import express from "express"
import { adminLogin, adminLogout, adminRegsiter, getallAdmin } from "../controller/adminController.js";
import { isadminAuthenticated } from "../middleware/auth.js";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/productController.js";


const router = express.Router();


router.post("/register", isadminAuthenticated ,  adminRegsiter);
router.post("/login", adminLogin);
router.post("/logout" , isadminAuthenticated , adminLogout );
router.get("/getall" ,  getallAdmin);

router.post("/addproducts" , isadminAuthenticated , createProduct);
router.delete("/products/:id" , isadminAuthenticated , deleteProduct);
router.put("/products/:id" , updateProduct);

router.get("/products/all" , getProducts);



export default router 