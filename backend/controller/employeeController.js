import { Employee } from "../models/employeeSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    const { name, email, phone, password, address, role } = req.body;

    if (!name || !email || !phone || !address || !password || !role) {
        return res.status(400).json({
            success: false,
            message: "Please provide full info"
        });
    }
    const isEmployee = await Employee.findOne({ email });
    if (isEmployee) {
        return res.status(409).json({
            success: false,
            message: "Email already exists"
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await Employee.create({ name, email, phone, password: hashedPassword, address, role });

    const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
    });

    res.status(200).json({
        success: true,
        message: "Employee  registered!",
        employee,
        token
    });
};

export const login = async (req, res, next) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({
            success: false,
            message: "Please provide full info"
        });
    }

    const employee = await Employee.findOne({ email });
    if (!employee) {
        return res.status(400).json({
            success: false,
            message: "Invalid credentials",
        });
    }

    const isPassword = await bcrypt.compare(password, employee.password);
    if (!isPassword) {
        return res.status(400).json({
            success: false,
            message: "Invalid credentials!"
        });
    }

    if (role !== employee.role) {
        return res.status(400).json({
            success: false,
            message: "Employee with this role not found"
        });
    }
    const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    });

    // const token = req.cookies.employeeToken;
    // if (!token) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "No token found. Please register first."
    //     });
    // }

    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     if (decoded.id !== employee._id.toString()) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "Invalid token for this role"
    //         });
    //     }
    // } catch (error) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "Invalid token"
    //     });
    // }


    res.status(200).cookie("employeeToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000)
    }).json({
        success: true,
        message: "Employee logged in ",
        employee,
        token
    });
};

export const getEmployee = async (req, res, next) => {
    const employee = await Employee.findById(req.employee._id);
    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }
    res.status(200).json({
        success: true,
        employee
    });
};


export const getallEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json({
            success: true,
           employee
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};


export const Logout = async (req, res, next) => {
    res.status(200).cookie("employeeToken", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Logged out!"
    });
};

export const deleteEmployee  = async(req,res,next)=>{
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product deleted!' });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
      }
}
