import express from "express"
import { adminLogin, adminLogout, adminRegister, deleteAdmin, getAdmin, getallAdmin, updateAdmin } from "../controller/adminController.js";
import { isadminAuthenticated } from "../middleware/auth.js";
import { createProduct, deleteProduct, getproduct, getProducts, updateProduct } from "../controller/productController.js";


const router = express.Router();


router.post("/register", isadminAuthenticated ,  adminRegister);
router.post("/login", adminLogin);
router.post("/logout" , isadminAuthenticated , adminLogout );
router.put("/me/update/:id" , isadminAuthenticated , updateAdmin);
router.get("/getall" ,  getallAdmin);
router.get("/me/:id" , getAdmin);
router.post("/addproducts" , isadminAuthenticated , createProduct);
router.get("/product/me/:id" , isadminAuthenticated ,  getproduct);
router.delete("/products/:id" , isadminAuthenticated , deleteProduct);
router.put("/products/:id" , updateProduct);
router.delete("/delete/:id" ,isadminAuthenticated , deleteAdmin );
router.get("/products/all" , getProducts);



export default router 