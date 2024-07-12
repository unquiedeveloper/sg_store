import jwt from 'jsonwebtoken';
import{ Employee }from '../models/employeeSchema.js';
import {Admin} from '../models/adminSchema.js';

export const isemployeeAuthenticated = async (req, res, next) => {
    const token = req.cookies.employeeToken || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Employee not authenticated"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.employee = await Employee.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};

export const isadminAuthenticated = async (req, res, next) => {
    const token = req.cookies.adminToken || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Admin not authenticated"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET2);
        req.admin = await Admin.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};
