import { Bill } from '../models/billSchema.js';
import { Product } from '../models/productSchema.js';

export const createBill = async (req, res) => {
    const { customerName, phoneNumber, address, products } = req.body;

    try {
        let totalAmount = 0;

        for (const product of products) {
            const { uniqueid, quantity } = product;

            // Find product by uniqueid
            const existingProduct = await Product.findOne({ uniqueid });

            if (!existingProduct) {
                return res.status(404).json({
                    success: false,
                    message: `Product with uniqueid ${uniqueid} not found`
                });
            }

            console.log('Existing product before update:', existingProduct);

            // Calculate total amount for the bill
            totalAmount += existingProduct.price * quantity;

            // Check if sufficient quantity is available
            if (existingProduct.qty < quantity) {
                return res.status(400).json({
                    success: false,
                    message: `Insufficient quantity available for product with uniqueid ${uniqueid}`
                });
            }

            // Reduce product quantity in stock
            existingProduct.qty -= quantity;
            await existingProduct.save();

            console.log('Existing product after update:', existingProduct);
        }

        // Create new bill
        const newBill = await Bill.create({
            customerName,
            phoneNumber,
            address,
            products,
            totalAmount
        });

        res.status(201).json({
            success: true,
            message: 'Bill created successfully!',
            bill: newBill
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create bill',
            error: error.message
        });
    }
};
