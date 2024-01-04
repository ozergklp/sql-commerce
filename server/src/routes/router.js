import express from "express";
import { getCategoires, getProducts, getProductsByCategory } from "../database/database.js";

const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Cannot find products'})
    }
})

router.get('/categories', async (req, res) => {
    try {
        const categories = await getCategoires();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Cannot find products'})
    }
})

router.get('/categories/:category', async (req, res) => {
    const { category } = req.params
    try {
        const items = await getProductsByCategory(category);
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Cannot find products'})
    }
})

export default router;