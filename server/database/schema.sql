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
    ('grace_evans', MD5(RAND()), 'grace.evans@example.com', 'Customer', '2023-01-11'),
    ('ryan_harris', MD5(RAND()), 'ryan.harris@example.com', 'Customer', '2023-01-12'),
    ('lily_turner', MD5(RAND()), 'lily.turner@example.com', 'Customer', '2023-01-13'),
    ('nathan_brown', MD5(RAND()), 'nathan.brown@example.com', 'Customer', '2023-01-14'),
    ('chloe_carter', MD5(RAND()), 'chloe.carter@example.com', 'Customer', '2023-01-15'),
    ('samuel_ward', MD5(RAND()), 'samuel.ward@example.com', 'Customer', '2023-01-16'),
    ('zoey_roberts', MD5(RAND()), 'zoey.roberts@example.com', 'Customer', '2023-01-17'),
    ('mason_king', MD5(RAND()), 'mason.king@example.com', 'Customer', '2023-01-18'),
    ('aubrey_miller', MD5(RAND()), 'aubrey.miller@example.com', 'Customer', '2023-01-19'),
    ('ethan_baker', MD5(RAND()), 'ethan.baker@example.com', 'Customer', '2023-01-20'),
    ('admin', MD5(RAND()), 'admin_commerce@example.com', 'Admin', '2023-01-11');
    
INSERT INTO Suppliers (SupplierName, ContactPerson, ContactEmail, ContactPhone) VALUES
    ('ABC Electronics', 'John Smith', 'john.smith@abc.com', '123-456-7890'),
    ('FashionHub', 'Alice Johnson', 'alice.johnson@fashionhub.com', '987-654-3210'),
    ('Green Living Co.', 'Robert Green', 'robert.green@greenliving.com', '567-890-1234'),
    ('Toy World', 'Emily Toyman', 'emily.toyman@toyworld.com', '876-543-2109'),
    ('Book Haven', 'David Reader', 'david.reader@bookhaven.com', '234-567-8901'),
    ('Sports Universe', 'Susan Athlete', 'susan.athlete@sportsuniverse.com', '654-321-0987'),
    ('Health Essentials', 'Michael Wellness', 'michael.wellness@healthessentials.com', '345-678-9012'),
    ('Auto Parts Plus', 'Olivia Mechanic', 'olivia.mechanic@autopartsplus.com', '789-012-3456'),
    ('Office Depot', 'Jackson Office', 'jackson.office@officedepot.com', '012-345-6789'),
    ('JewelCraft', 'Emma Jeweler', 'emma.jeweler@jewelcraft.com', '890-123-4567'),
    ('Tech Innovations', 'Alex Techguru', 'alex.techguru@techinnovations.com', '456-789-0123'),
    ('Gadget Zone', 'Sophie Gizmo', 'sophie.gizmo@gadgetzone.com', '321-098-7654'),
    ('Green Planet Solutions', 'Daniel Eco', 'daniel.eco@greenplanet.com', '789-012-3456'),
    ('Global Sports Gear', 'Isaac Sportster', 'isaac.sportster@globalsports.com', '012-345-6789'),
    ('Wellness World', 'Mia Health', 'mia.health@wellnessworld.com', '890-123-4567'),
    ('Auto Accessories Galore', 'Chris Auto', 'chris.auto@accessoriesgalore.com', '234-567-8901'),
    ('Office Innovations', 'Ella Office', 'ella.office@innovations.com', '654-321-0987'),
    ('Jewel Haven', 'Liam Gem', 'liam.gem@jewelhaven.com', '876-543-2109'),
    ('Tech Solutions Plus', 'Ava Techie', 'ava.techie@techsolutionsplus.com', '234-567-8901'),
    ('Fashion Trends', 'Noah Stylish', 'noah.stylish@fashiontrends.com', '876-543-2109');

INSERT INTO Categories (CategoryName) VALUES
    ('Electronics'),
    ('Clothing'),
    ('Home and Garden'),
    ('Toys and Games'),
    ('Books'),
    ('Sports and Outdoors'),
    ('Health and Beauty'),
    ('Automotive'),
    ('Office Supplies'),
    ('Jewelry');

INSERT INTO Products (ProductName, Description, Price, StockQuantity, CategoryID, SupplierID)
VALUES
    ('Smartphone X', 'Latest smartphone with advanced features.', 799.99, 100, 1, 1),
    ('Laptop Pro', 'Powerful laptop for professional use.', 1299.99, 50, 1, 1),
    ('LED Smart TV', 'High-definition smart TV for an immersive experience.', 899.99, 30, 1, 1),
    ('Fashionable Shirt', 'Stylish shirt for casual occasions.', 29.99, 200, 2, 2),
    ('Designer Dress', 'Elegant designer dress for special events.', 149.99, 50, 2, 2),
    ('Garden Tools Set', 'Complete set of essential tools for gardening.', 69.99, 100, 3, 3),
    ('Kids Toy Set', 'Assortment of toys for children of all ages.', 39.99, 150, 4, 4),
    ('Bestseller Novel', 'Popular novel by a renowned author.', 19.99, 100, 5, 5),
    ('Outdoor Sports Gear', 'Equipment for outdoor sports activities.', 49.99, 80, 6, 6),
    ('Beauty Essentials Kit', 'Essential beauty products for daily use.', 79.99, 120, 7, 7),
    ('Car Care Kit', 'Complete kit for car maintenance and care.', 29.99, 50, 8, 8),
    ('Office Desk Organizer', 'Organize your workspace with this desk organizer.', 14.99, 100, 9, 9),
    ('Jewelry Set', 'Elegant jewelry set for special occasions.', 99.99, 30, 10, 10),
    ('Tech Gadgets Bundle', 'Bundle of the latest tech gadgets.', 299.99, 50, 1, 11),
    ('Fitness Tracker', 'Track your fitness with this advanced fitness tracker.', 79.99, 60, 7, 12),
    ('Sports Water Bottle', 'Stay hydrated during workouts with this sports bottle.', 9.99, 150, 6, 13),
    ('Green Living Book', 'Guide to sustainable living and eco-friendly practices.', 24.99, 80, 5, 14),
    ('Global Sports Jersey', 'Official jersey for global sports enthusiasts.', 59.99, 40, 6, 15),
    ('Wellness and Relaxation Set', 'Set of products for wellness and relaxation.', 129.99, 50, 7, 16),
    ('Auto Accessories Package', 'Package of essential auto accessories.', 39.99, 70, 8, 17),
    ('Innovative Office Gadgets', 'Collection of innovative gadgets for the office.', 89.99, 40, 9, 18);


INSERT INTO Orders (UserID, OrderDate, TotalAmount, OrderStatus)
VALUES
    (1, '2023-01-21', 899.99, 'Shipped'),
    (2, '2023-01-22', 1479.97, 'Processing'),
    (3, '2023-01-23', 899.99, 'Delivered'),
    (4, '2023-01-24', 149.99, 'Cancelled'),
    (5, '2023-01-25', 699.95, 'Shipped'),
    (6, '2023-01-26', 419.94, 'Processing'),
    (7, '2023-01-27', 199.98, 'Shipped'),
    (8, '2023-01-28', 599.94, 'Processing'),
    (9, '2023-01-29', 999.90, 'Delivered'),
    (10, '2023-01-30', 79.99, 'Shipped'),
    (11, '2023-01-31', 299.99, 'Processing'),
    (12, '2023-02-01', 79.99, 'Delivered'),
    (13, '2023-02-02', 199.98, 'Shipped'),
    (14, '2023-02-03', 349.95, 'Processing'),
    (15, '2023-02-04', 119.97, 'Shipped'),
    (16, '2023-02-05', 149.99, 'Processing'),
    (17, '2023-02-06', 999.90, 'Delivered'),
    (18, '2023-02-07', 239.94, 'Shipped'),
    (19, '2023-02-08', 199.98, 'Processing'),
    (20, '2023-02-09', 849.93, 'Shipped');

INSERT INTO OrderDetails (OrderID, ProductID, Quantity, UnitPrice, Subtotal)
VALUES
    (1, 1, 2, 799.99, 1599.98),
    (2, 2, 1, 1299.99, 1299.99),
    (2, 3, 1, 899.99, 899.99),
    (3, 4, 3, 29.99, 89.97),
    (4, 5, 1, 149.99, 149.99),
    (5, 6, 1, 69.99, 69.99),
    (6, 7, 2, 39.99, 79.98),
    (7, 8, 1, 19.99, 19.99),
    (8, 9, 4, 49.99, 199.96),
    (9, 10, 1, 79.99, 79.99),
    (10, 11, 1, 29.99, 29.99),
    (11, 12, 2, 14.99, 29.98),
    (12, 13, 1, 99.99, 99.99),
    (13, 14, 1, 299.99, 299.99),
    (14, 15, 3, 79.99, 239.97),
    (15, 16, 5, 9.99, 49.95),
    (16, 17, 1, 24.99, 24.99),
    (17, 18, 2, 59.99, 119.98),
    (18, 19, 1, 129.99, 129.99),
    (19, 20, 2, 39.99, 79.98),
    (20, 21, 1, 89.99, 89.99);


INSERT INTO Reviews (UserID, ProductID, Rating, Comment, ReviewDate)
VALUES
    (1, 1, 5, 'Great smartphone, excellent features!', '2023-02-10'),
    (2, 2, 4, 'Powerful laptop, meets my expectations.', '2023-02-11'),
    (3, 3, 5, 'Love the high-definition display of this TV.', '2023-02-12'),
    (4, 4, 3, 'The shirt is nice, but the size is a bit small.', '2023-02-13'),
    (5, 5, 5, 'Elegant dress, perfect for special occasions.', '2023-02-14'),
    (6, 6, 4, 'Good quality garden tools, sturdy and durable.', '2023-02-15'),
    (7, 7, 5, 'My kids love this toy set, great variety!', '2023-02-16'),
    (8, 8, 3, 'The novel is interesting, but not a page-turner.', '2023-02-17'),
    (9, 9, 4, 'Quality sports gear, comfortable to use.', '2023-02-18'),
    (10, 10, 5, 'Amazing beauty essentials kit, love it!', '2023-02-19'),
    (11, 11, 3, 'Car care kit is okay, some items are unnecessary.', '2023-02-20'),
    (12, 12, 5, 'Great office desk organizer, keeps things tidy.', '2023-02-21'),
    (13, 13, 4, 'Beautiful jewelry set, received many compliments.', '2023-02-22'),
    (14, 14, 5, 'Tech gadgets bundle exceeded my expectations.', '2023-02-23'),
    (15, 15, 4, 'The fitness tracker works well, accurate readings.', '2023-02-24'),
    (16, 16, 2, 'Not impressed with the sports water bottle quality.', '2023-02-25'),
    (17, 17, 5, 'Excellent book on green living, very informative.', '2023-02-26'),
    (18, 18, 4, 'The global sports jersey is stylish and comfortable.', '2023-02-27'),
    (19, 19, 5, 'Wellness and relaxation set is a great stress reliever.', '2023-02-28'),
    (20, 20, 3, 'Auto accessories package is missing a few essentials.', '2023-03-01');

