# Inventory Management System

A RESTful backend API built using Node.js, Express.js, MongoDB, and Mongoose to manage product inventory.

## Features

- Create, read, update, and delete products (CRUD)
- Product schema and validation
- Filter products by category
- Sort products by price and quantity
- Pagination with input validation
- Low-stock alerts
- Category-wise inventory summary using aggregation
- Stock restocking and sales management
- Centralized error handling
- Async error handling middleware

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- dotenv
- Postman

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/sumit01aug2007-web/Inventory-Management-System
   ```

2. Navigate to the project directory:

   ```bash
   cd inventory-management-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory using `.env.example` as a reference.

5. Start the server:

   ```bash
   node server.js
   ```

The server runs on port 5000 by default.

## API Endpoints

| Method | Endpoint                         | Description               |
| ------ | -------------------------------- | ------------------------- |
| POST   | `/api/products`                  | Create a product          |
| GET    | `/api/products`                  | Get all products          |
| GET    | `/api/products/:id`              | Get a single product      |
| PUT    | `/api/products/:id`              | Update a product          |
| DELETE | `/api/products/:id`              | Delete a product          |
| PATCH  | `/api/products/:id/restock`      | Add stock                 |
| PATCH  | `/api/products/:id/sale`         | Reduce stock              |
| GET    | `/api/products/low-stock`        | Get low-stock products    |
| GET    | `/api/products/category-summary` | Get category-wise summary |

## Postman API Testing Screenshots

All API endpoints and their functionality were tested using Postman.

### 1. Create Product



### 2. Get All Products



### 3. Get Single Product



### 4. Update Product



### 5. Delete Product



### 6. Filter Products by Category



### 7. Combined Filtering and Sorting



### 8. Sort Products by Price

**Ascending Order**



**Descending Order**



### 9. Sort Products by Quantity

**Ascending Order**



**Descending Order**



### 10. Pagination

**Page 1**



**Page 2**



**Page 3**



**Valid Pagination Limit**



### 11. Pagination Validation

**Invalid Page**



**Invalid Limit**



**Limit Exceeds Maximum Allowed Value**



**Non-numeric Page**



### 12. Stock Management

**Restock Product**



**Sell Product**



### 13. Low-Stock Report



### 14. Category-wise Inventory Summary

## API Testing Screenshots (Postman)

The following screenshots demonstrate the successful execution and testing of the API endpoints.

### 1. Create Product
![Create Product](screenshots/create-product.png)

### 2. Get All Products
![Get All Products](screenshots/get-all-products.png)

### 3. Get Single Product
![Get Single Product](screenshots/get-single-product.png)

### 4. Filter Products by Category
![Filter Category](screenshots/filter-category.png)

### 5. Combined Filtering and Sorting
![Combined Filter and Sort](screenshots/combined-filter-sort.png)

### 6. Sort Products by Price
![Price Ascending](screenshots/sort-price-ascending.png)

![Price Descending](screenshots/sort-price-descending.png)

### 7. Sort Products by Quantity
![Quantity Ascending](screenshots/quantity-sorting-ascending.png)

![Quantity Descending](screenshots/quantity-sorting-desc.png)

### 8. Pagination
![Pagination Page 1](screenshots/pagination-page-1.png)

![Pagination Page 2](screenshots/pagination-page-2.png)

![Pagination Page 3](screenshots/pagination-page-3.png)

### 9. Pagination Validation
![Invalid Page](screenshots/pagination-invalid-page-400-error.png)

![Invalid Limit](screenshots/pagination-invalid-limit-400.png)

![Limit Exceeds 100](screenshots/pagination-limit-exceeds-100-400.png)

![Non Numeric Page](screenshots/pagination-non-numeric-page-400.png)

### 10. Low Stock Report
![Low Stock](screenshots/low-stock.png)

### 11. Category Summary
![Category Summary](screenshots/category-summary.png)

### 12. Stock Management
![Restock](screenshots/restock.png)

![Sale](screenshots/sale.png)

### 13. Update and Delete Product
![Update Product](screenshots/update-product.png)

![Delete Product](screenshots/delete-product.png)

## Author

**Shahnawaz**

BCA (AI & DS)
Enrollment Number: 2501060223
