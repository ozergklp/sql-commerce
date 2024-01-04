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
  

export async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM Users');
    return rows;
}

export async function getProductsByCategory(categoryName) {
  try {
    // Execute the SQL query
    const [rows] = await pool.query(`
      SELECT
        Products.ProductID,
        Products.ProductName,
        Products.Description,
        Products.Price,
        Products.StockQuantity,
        Categories.CategoryName
      FROM
        Products
      JOIN
        Categories ON Products.CategoryID = Categories.CategoryID
      WHERE
        Categories.CategoryName = ?
    `, [categoryName]);
    return rows;
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error; 
  }
}

export async function searchProducts(query) {
  try {
    // Execute the SQL query to search for products by name or description using CONCAT
    const [rows] = await pool.query(`
      SELECT
        ProductID,
        ProductName,
        Description,
        Price,
        StockQuantity
      FROM
        Products
      WHERE
        CONCAT(ProductName, ' ', Description) LIKE ?
    `, [`%${query}%`]);

    return rows;
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error;
  }
}


export async function getProducts() {
  const [rows] = await pool.query('SELECT * FROM Products');
  return rows;
}

export async function getCategoires() {
  const [rows] = await pool.query('SELECT * FROM Categories');
  return rows;
}

