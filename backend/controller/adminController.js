import { Admin } from "../models/adminSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const adminRegsiter = async (req, res, next) => {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !password || !phone || !role) {
        return res.status(400).json({
            success: false,
            message: "Please provide full info"
        });
    }
    const isAdmin = await Admin.findOne({ email });
    if (isAdmin) {
        return res.status(400).json({
            success: false,
            message: "Admin already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({ name, email, password: hashedPassword, phone, role });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET2, {
        expiresIn: process.env.JWT_EXPIRES
    });

    res.status(200).json({
        success: true,
        message: "Admin registered successfully!",
        admin
        

    })

   
};

export const adminLogin = async (req, res, next) => {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
        return res.status(400).json({
            success: false,
            message: "Please provide full info"
        });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
        return res.status(400).json({
            success: false,
            message: "Invalid credentials!"
        });
    }

    const isPassword = await bcrypt.compare(password, admin.password);
    if (!isPassword) {
        return res.status(400).json({
            success: false,
            message: "Invalid credentials!"
        });
    }

    if (role !== admin.role) {
        return res.status(400).json({
            success: false,
            message: "Admin with this role not found"
        });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET2, {
        expiresIn: process.env.JWT_EXPIRES
    });
    res.status(200).cookie("adminToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000)
    }).json({
        success: true,
        message: "Admin logged in successfully!",
        admin,
        token
    });

    // const token = req.cookies.adminToken;
    // if (!token) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "No token found. Please register first."
    //     });
    // }

    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET2);
    //     if (decoded.id !== admin._id.toString()) {
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

    // res.status(200).json({
    //     success: true,
    //     message: "Logged in!",
    //     admin
    // });
};

export const adminLogout = async (req, res, next) => {
    res.status(200).cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Logged out!"
    });
};


export const getallAdmin = async (req, res) => {
    try {
        const admin = await Admin.find();
        res.status(200).json({
            success: true,
           admin
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};
