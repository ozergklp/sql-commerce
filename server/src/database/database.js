import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();


export const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }).promise();
  
  export async function getUsersCount() {
    try {
      const [rows] = await pool.query('SELECT COUNT(UserID) AS TotalUsers FROM Users');
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
  
  export async function getAverageProductPrice() {
    try {
      const [rows] = await pool.query('SELECT AVG(Price) AS AveragePrice FROM Products');
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
  
  export async function getMaxStockQuantity() {
    try {
      const [rows] = await pool.query('SELECT MAX(StockQuantity) AS MaxStock FROM Products');
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
  
  export async function getTotalOrderAmountByUser() {
    try {
      const [rows] = await pool.query(`
        SELECT UserID, SUM(TotalAmount) AS TotalOrderAmount
        FROM Orders
        GROUP BY UserID
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getProductCountByCategory() {
    try {
      const [rows] = await pool.query(`
        SELECT CategoryName, COUNT(ProductID) AS ProductCount
        FROM Products
        JOIN Categories ON Products.CategoryID = Categories.CategoryID
        GROUP BY CategoryName
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getAverageRatingByProduct() {
    try {
      const [rows] = await pool.query(`
        SELECT ProductID, AVG(Rating) AS AverageRating
        FROM Reviews
        GROUP BY ProductID
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getTotalQuantityByOrder() {
    try {
      const [rows] = await pool.query(`
        SELECT OrderID, SUM(Quantity) AS TotalQuantity
        FROM OrderDetails
        GROUP BY OrderID
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getProductWithHighestPrice() {
    try {
      const [rows] = await pool.query(`
        SELECT ProductName, MAX(Price) AS HighestPrice
        FROM Products
        GROUP BY ProductName
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  
  
  
  export async function getAverageUserRating() {
    try {
      const [rows] = await pool.query('SELECT AVG(Rating) AS AverageUserRating FROM Reviews');
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
  
  export async function getReviewCountByProduct() {
    try {
      const [rows] = await pool.query(`
        SELECT ProductID, COUNT(ReviewID) AS ReviewCount
        FROM Reviews
        GROUP BY ProductID
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  export async function insertNewSupplier(supplierName, contactPerson, contactEmail, contactPhone) {
    try {
      await pool.query(
        'INSERT INTO Suppliers (SupplierName, ContactPerson, ContactEmail, ContactPhone) VALUES (?, ?, ?, ?)',
        [supplierName, contactPerson, contactEmail, contactPhone]
      );
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateOrderStatus(orderId, newStatus) {
    try {
      await pool.query('UPDATE Orders SET OrderStatus = ? WHERE OrderID = ?', [newStatus, orderId]);
    } catch (error) {
      throw error;
    }
  }
  export async function deleteReview(reviewId) {
    try {
      const [rows] = await pool.query('DELETE FROM Reviews WHERE ReviewID = ?', [reviewId]);
      return rows;
    } catch (error) {
      throw error;
    }
  }
  

  export async function getAveragePriceByCategory() {
    try {
      const [rows] = await pool.query(`
        SELECT c.CategoryName, AVG(p.Price) AS AveragePrice
        FROM Categories c
        JOIN Products p ON c.CategoryID = p.CategoryID
        GROUP BY c.CategoryName
      `);
  
      return rows;
    } catch (error) {
      throw error;
    }
  }
  export async function getReviews() {
    try {
      const [rows] = await pool.query('SELECT ReviewID, Comment FROM Reviews');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  export async function GetOrderStatus() {
    try {
      const [rows] = await pool.query('SELECT OrderID, OrderStatus FROM Orders');
      return rows;
    } catch (error) {
      throw error;
    }
  }


  export async function GetAllSuppliers() {
    try {
      const [rows] = await pool.query('SELECT * FROM Suppliers');
      return rows;
    } catch (error) {
      throw error;
    }
  }