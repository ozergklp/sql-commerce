CREATE DATABASE IF NOT EXISTS Commerce;
USE Commerce;

CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    UserType VARCHAR(50),
    RegistrationDate DATE
);

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY AUTO_INCREMENT,
    CategoryName VARCHAR(255) NOT NULL
);

CREATE TABLE Suppliers (
    SupplierID INT PRIMARY KEY AUTO_INCREMENT,
    SupplierName VARCHAR(255) NOT NULL,
    ContactPerson VARCHAR(255),
    ContactEmail VARCHAR(255),
    ContactPhone VARCHAR(20)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2),
    StockQuantity INT,
    CategoryID INT,
    SupplierID INT,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2),
    OrderStatus VARCHAR(50),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY AUTO_INCREMENT,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    UnitPrice DECIMAL(10, 2),
    Subtotal DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ProductID INT,
    Rating INT,
    Comment TEXT,
    ReviewDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

INSERT INTO Users (Username, Password, Email, UserType, RegistrationDate)
VALUES
    ('john_doe', MD5(RAND()), 'john.doe@example.com', 'Customer', '2023-01-01'),
    ('alice_smith', MD5(RAND()), 'alice.smith@example.com', 'Customer', '2023-01-02'),
    ('bob_jones', MD5(RAND()), 'bob.jones@example.com', 'Customer', '2023-01-03'),
    ('emily_wang', MD5(RAND()), 'emily.wang@example.com', 'Customer', '2023-01-04'),
    ('david_miller', MD5(RAND()), 'david.miller@example.com', 'Customer', '2023-01-05'),
    ('susan_white', MD5(RAND()), 'susan.white@example.com', 'Customer', '2023-01-06'),
    ('michael_clark', MD5(RAND()), 'michael.clark@example.com', 'Customer', '2023-01-07'),
    ('olivia_hill', MD5(RAND()), 'olivia.hill@example.com', 'Customer', '2023-01-08'),
    ('jackson_lee', MD5(RAND()), 'jackson.lee@example.com', 'Customer', '2023-01-09'),
    ('emma_adams', MD5(RAND()), 'emma.adams@example.com', 'Customer', '2023-01-10'),
    ('acme_inc', MD5(RAND()), 'acme.inc@example.com', 'Seller', '2023-01-11'),
    ('widget_co', MD5(RAND()), 'widget.co@example.com', 'Seller', '2023-01-12'),
    ('tech_enterprises', MD5(RAND()), 'tech.enterprises@example.com', 'Seller', '2023-01-13'),
    ('global_traders', MD5(RAND()), 'global.traders@example.com', 'Seller', '2023-01-14'),
    ('innovative_solutions', MD5(RAND()), 'innovative.solutions@example.com', 'Seller', '2023-01-15'),
    ('international_merchants', MD5(RAND()), 'international.merchants@example.com', 'Seller', '2023-01-16'),
    ('continental_traders', MD5(RAND()), 'continental.traders@example.com', 'Seller', '2023-01-17'),
    ('universal_commerce', MD5(RAND()), 'universal.commerce@example.com', 'Seller', '2023-01-18'),
    ('cosmic_trading', MD5(RAND()), 'cosmic.trading@example.com', 'Seller', '2023-01-19'),
    ('interstellar_exports', MD5(RAND()), 'interstellar.exports@example.com', 'Seller', '2023-01-20');
