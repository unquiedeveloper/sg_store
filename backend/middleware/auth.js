export const isemployeeAuthenticated = async (req, res, next) => {
    const { employeeToken } = req.cookies.employeeToken || req.headers.authorization?.split(" ")[1]; // Changed "[1]" to ".split(" ")[1]"
    if (!employeeToken) {
        return res.status(401).json({
            success: false,
            message: "Employee not authenticated"
        });
    }

    try {
        const decoded = jwt.verify(employeeToken, process.env.JWT_SECRET);
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
    const { adminToken } = req.cookies.adminToken || req.headers.authorization?.split(" ")[1]; // Changed "[1]" to ".split(" ")[1]"
    if (!adminToken) {
        return res.status(401).json({
            success: false,
            message: "Admin not authenticated"
        });
    }

    try {
        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET2);
        req.admin = await Admin.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};
