<div align="center">

# 🚀 Express MongoDB MVC API

### A Modern, Scalable RESTful API with JWT Authentication

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18+-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

<p align="center">
  <img src="https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  <img src="https://img.shields.io/badge/Maintained-yes-green.svg?style=flat-square" alt="Maintained">
</p>

**[Features](#-features) • [Quick Start](#-quick-start) • [API Documentation](#-api-documentation) • [Project Structure](#-project-structure) • [Technologies](#-technologies)**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Project Structure](#-project-structure)
- [Technologies](#-technologies)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

A **production-ready** Express.js REST API built with **MongoDB** and following the **MVC (Model-View-Controller)** architectural pattern. This API features complete **JWT authentication**, comprehensive **CRUD operations**, and intelligent **inventory management**.

Perfect for building e-commerce platforms, order management systems, or any application requiring user authentication and resource management.

---

## ✨ Features

<table>
<tr>
<td>

### 🔐 Authentication
- ✅ User Registration (Signup)
- ✅ User Login with JWT
- ✅ Password Hashing (bcrypt)
- ✅ Protected Routes
- ✅ Token Validation

</td>
<td>

### 📦 Resource Management
- ✅ Customer CRUD Operations
- ✅ Product CRUD Operations
- ✅ Order Management
- ✅ Inventory Tracking
- ✅ Auto-calculation

</td>
</tr>
<tr>
<td>

### 🛡️ Security
- ✅ JWT Token Authentication
- ✅ Password Encryption
- ✅ Request Validation
- ✅ Error Handling
- ✅ CORS Enabled

</td>
<td>

### 🎨 Code Quality
- ✅ MVC Architecture
- ✅ Clean Code Principles
- ✅ RESTful Best Practices
- ✅ Modular Structure
- ✅ Well Documented

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (v4.4 or higher)

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/express-mongo-mvc.git

# 2️⃣ Navigate to project directory
cd express-mongo-mvc

# 3️⃣ Install dependencies
npm install

# 4️⃣ Configure environment variables
cp .env.example .env
# Edit .env with your configuration

# 5️⃣ Start MongoDB (if not running)
mongod

# 6️⃣ Run the application
npm start

# 🔥 For development with auto-reload
npm run dev
```

<div align="center">

### 🎉 Server is now running at `http://localhost:5000`

</div>

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb://localhost:27017/express_mvc_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
```

> ⚠️ **Security Note:** Never commit your `.env` file. Always use strong, unique secrets in production!

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

<details>
<summary><b>🔐 Authentication Endpoints</b></summary>

### 1. User Signup
**POST** `/auth/signup`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### 2. User Login
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### 3. Get Current User
**GET** `/auth/me`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

</details>

<details>
<summary><b>👥 Customer Endpoints</b></summary>

> **Note:** All customer endpoints require authentication. Include JWT token in Authorization header.

### 1. Get All Customers
**GET** `/customers`

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Jane Smith",
      "address": "123 Main St, New York, NY",
      "salary": 75000,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

---

### 2. Get Single Customer
**GET** `/customers/:id`

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Jane Smith",
    "address": "123 Main St, New York, NY",
    "salary": 75000
  }
}
```

---

### 3. Create Customer
**POST** `/customers`

**Request Body:**
```json
{
  "name": "Jane Smith",
  "address": "123 Main St, New York, NY",
  "salary": 75000
}
```

**Response:** `201 Created`

---

### 4. Update Customer
**PUT** `/customers/:id`

**Request Body:**
```json
{
  "name": "Jane Smith Updated",
  "salary": 80000
}
```

**Response:** `200 OK`

---

### 5. Delete Customer
**DELETE** `/customers/:id`

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {},
  "message": "Customer deleted successfully"
}
```

</details>

<details>
<summary><b>📦 Product Endpoints</b></summary>

> **Note:** All product endpoints require authentication.

### 1. Get All Products
**GET** `/products`

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "description": "Laptop Computer",
      "unitPrice": 999.99,
      "qtyOnHand": 50,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

---

### 2. Get Single Product
**GET** `/products/:id`

---

### 3. Create Product
**POST** `/products`

**Request Body:**
```json
{
  "description": "Gaming Laptop",
  "unitPrice": 1299.99,
  "qtyOnHand": 25
}
```

**Response:** `201 Created`

---

### 4. Update Product
**PUT** `/products/:id`

**Request Body:**
```json
{
  "unitPrice": 1199.99,
  "qtyOnHand": 30
}
```

---

### 5. Delete Product
**DELETE** `/products/:id`

</details>

<details>
<summary><b>🛒 Order Endpoints</b></summary>

> **Note:** All order endpoints require authentication.

### 1. Get All Orders
**GET** `/orders`

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439013",
      "customer": {
        "_id": "507f1f77bcf86cd799439011",
        "name": "Jane Smith",
        "address": "123 Main St"
      },
      "date": "2024-01-15T10:30:00.000Z",
      "totalAmount": 2599.98,
      "productDetails": [
        {
          "product": {
            "_id": "507f1f77bcf86cd799439012",
            "description": "Gaming Laptop",
            "unitPrice": 1299.99
          },
          "quantity": 2,
          "price": 1299.99
        }
      ]
    }
  ]
}
```

---

### 2. Create Order
**POST** `/orders`

**Request Body:**
```json
{
  "customer": "507f1f77bcf86cd799439011",
  "productDetails": [
    {
      "product": "507f1f77bcf86cd799439012",
      "quantity": 2
    },
    {
      "product": "507f1f77bcf86cd799439013",
      "quantity": 1
    }
  ]
}
```

**Features:**
- ✅ Automatically calculates `totalAmount`
- ✅ Validates product availability
- ✅ Updates inventory (`qtyOnHand`)
- ✅ Sets product price at order time

**Response:** `201 Created`

---

### 3. Update Order
**PUT** `/orders/:id`

**Note:** Updating an order will:
1. Restore old product quantities
2. Validate new product availability
3. Update inventory with new quantities
4. Recalculate total amount

---

### 4. Delete Order
**DELETE** `/orders/:id`

**Note:** Deleting an order automatically restores product inventory.

</details>

---

## 💾 Database Schema

<table>
<tr>
<td width="50%">

### 👤 User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### 👥 Customer Model
```javascript
{
  name: String,
  address: String,
  salary: Number,
  createdAt: Date,
  updatedAt: Date
}
```

</td>
<td width="50%">

### 📦 Product Model
```javascript
{
  description: String,
  unitPrice: Number,
  qtyOnHand: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### 🛒 Order Model
```javascript
{
  customer: ObjectId (ref: Customer),
  date: Date,
  totalAmount: Number,
  productDetails: [{
    product: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  createdAt: Date,
  updatedAt: Date
}
```

</td>
</tr>
</table>

---

## 📁 Project Structure

```
express-mongo-mvc/
│
├── 📂 config/
│   └── db.js                    # Database connection
│
├── 📂 models/
│   ├── User.js                  # User schema & methods
│   ├── Customer.js              # Customer schema
│   ├── Product.js               # Product schema
│   └── Order.js                 # Order schema
│
├── 📂 controllers/
│   ├── authController.js        # Authentication logic
│   ├── customerController.js    # Customer CRUD logic
│   ├── productController.js     # Product CRUD logic
│   └── orderController.js       # Order CRUD logic
│
├── 📂 routes/
│   ├── authRoutes.js           # Auth endpoints
│   ├── customerRoutes.js       # Customer endpoints
│   ├── productRoutes.js        # Product endpoints
│   └── orderRoutes.js          # Order endpoints
│
├── 📂 middleware/
│   └── auth.js                 # JWT verification
│
├── 📄 server.js                # Application entry point
├── 📄 package.json             # Dependencies
├── 📄 .env                     # Environment variables
├── 📄 .gitignore              # Git ignore rules
└── 📄 README.md               # Documentation
```

---

## 🛠️ Technologies

<div align="center">

| Technology | Description |
|------------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | JavaScript Runtime |
| ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) | Web Framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | NoSQL Database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | ODM Library |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white) | Authentication |
| ![bcrypt](https://img.shields.io/badge/bcrypt-338888?style=for-the-badge) | Password Hashing |

</div>

### Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.3",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5",
  "express-validator": "^7.0.1"
}
```

---

## 🔍 Testing

### Using Postman

1. **Import Collection**: Import the API endpoints into Postman
2. **Signup/Login**: Get your JWT token
3. **Set Authorization**: Add token to Authorization header as `Bearer YOUR_TOKEN`
4. **Test Endpoints**: Try all CRUD operations

### Using cURL

```bash
# Signup
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Get Customers (with token)
curl -X GET http://localhost:5000/api/customers \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🎯 Best Practices Implemented

✅ **MVC Architecture** - Separation of concerns  
✅ **RESTful API Design** - Standard HTTP methods  
✅ **Error Handling** - Comprehensive error responses  
✅ **Data Validation** - Input validation on all endpoints  
✅ **Security** - JWT authentication & password hashing  
✅ **Code Organization** - Modular and maintainable  
✅ **Environment Variables** - Configuration management  
✅ **CORS Enabled** - Cross-origin resource sharing  

---

## 🚦 Response Status Codes

| Code | Description |
|------|-------------|
| `200` | ✅ Success |
| `201` | ✅ Created |
| `400` | ❌ Bad Request |
| `401` | ❌ Unauthorized |
| `404` | ❌ Not Found |
| `500` | ❌ Server Error |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📝 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

<div align="center">

**Rasadi Manodya**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)

</div>

---

## 🙏 Acknowledgments

- Node.js Community
- Express.js Team
- MongoDB Team
- All contributors and supporters

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Made with ❤️ and ☕**

</div>
