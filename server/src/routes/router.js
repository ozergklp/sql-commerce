import express from "express";
import {
    getUsersCount,
    getAverageProductPrice,
    getMaxStockQuantity,
    getTotalOrderAmountByUser,
    getProductCountByCategory,
    getAverageRatingByProduct,
    getTotalQuantityByOrder,
    getProductWithHighestPrice,
    getAverageUserRating,
    getReviewCountByProduct,
    insertNewSupplier,
    updateOrderStatus,
    deleteReview,
    getAveragePriceByCategory,
    getReviews,
    GetOrderStatus,
    GetAllSuppliers,
  } from '../database/database.js';

const router = express.Router();

router.get('/users/count', async (req, res) => {
    try {
      const totalUsers = await getUsersCount();
      res.json(totalUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get the average product price
  router.get('/products/average-price', async (req, res) => {
    try {
      const averagePrice = await getAverageProductPrice();
      res.json(averagePrice );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get the maximum stock quantity
  router.get('/products/max-stock', async (req, res) => {
    try {
      const maxStock = await getMaxStockQuantity();
      res.json( maxStock );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get total order amount by user
  router.get('/orders/total-amount-by-user', async (req, res) => {
    try {
      const totalOrderAmount = await getTotalOrderAmountByUser();
      res.json(totalOrderAmount);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get product count by category
  router.get('/products/count-by-category', async (req, res) => {
    try {
      const productCountByCategory = await getProductCountByCategory();
      res.json(productCountByCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get average rating by product
  router.get('/products/average-rating', async (req, res) => {
    try {
      const averageRatingByProduct = await getAverageRatingByProduct();
      res.json(averageRatingByProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get total quantity by order
  router.get('/orders/total-quantity-by-order', async (req, res) => {
    try {
      const totalQuantityByOrder = await getTotalQuantityByOrder();
      res.json(totalQuantityByOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get product with highest price
  router.get('/products/highest-price', async (req, res) => {
    try {
      const productWithHighestPrice = await getProductWithHighestPrice();
      res.json(productWithHighestPrice);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get average user rating
  router.get('/reviews/average-user-rating', async (req, res) => {
    try {
      const averageUserRating = await getAverageUserRating();
      res.json(averageUserRating );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get review count by product
  router.get('/reviews/count-by-product', async (req, res) => {
    try {
      const reviewCountByProduct = await getReviewCountByProduct();
      res.json(reviewCountByProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post('/suppliers/new', async (req, res) => {
    const { supplierName, contactPerson, contactEmail, contactPhone } = req.body;
    try {
      await insertNewSupplier(supplierName, contactPerson, contactEmail, contactPhone);
      res.status(201).json({ message: 'Supplier inserted successfully' });
    } catch (error) {
      console.error('Error inserting new supplier:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.put('/orders/update-status', async (req, res) => {
    const { orderId, newStatus } = req.body;
    try {
      await updateOrderStatus(orderId, newStatus);
      res.json({ message: 'Order status updated successfully' });
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  
  // Delete a review
  router.delete('/reviews/delete/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    try {
      await deleteReview(reviewId);
      res.json({ message: 'Review deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/average-price-by-category', async (req, res) => {
    try {
      const result = await getAveragePriceByCategory();
      res.json(result);
    } catch (error) {
      console.error('Error fetching average price by category:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  

  router.get('/reviews/all', async (req, res) => {
    try {
      const reviews = await getReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/orders/all', async (req, res) => {
    try {
      const reviews = await GetOrderStatus();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/suppliers/all', async (req, res) => {
    try {
      const reviews = await GetAllSuppliers();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  export default router;