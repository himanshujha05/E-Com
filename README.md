# Shopper — E-Commerce App

A full-stack online clothing store where you can browse products, add them to your cart, and place orders. Built with React on the frontend and Node.js + MongoDB on the backend.

---

## What it does

- Browse clothes across Men, Women, and Kids categories
- Click any product to see details and add it to your cart
- Create an account or log in to save your cart
- Checkout and pay via Razorpay
- Fully responsive — works on mobile and desktop

---

## Tech used

**Frontend** — React, React Router, Context API, Axios, CSS

**Backend** — Node.js, Express, MongoDB, Mongoose, JWT, Razorpay

---

## How to run it locally

You'll need **Node.js** and **Docker** installed.

### 1. Clone the repo

```bash
git clone https://github.com/himanshujha05/E-Com.git
cd E-Com
```

### 2. Start MongoDB via Docker

```bash
docker run -d --name shopper-mongo -p 27017:27017 mongo:7
```

### 3. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/shopper
JWT_SECRET=your_secret_here
RAZORPAY_KEY_ID=your_key_here
RAZORPAY_KEY_SECRET=your_secret_here
CLIENT_URL=http://localhost:3000
```

Seed the database with products and an admin account:

```bash
node seed.js
```

Start the backend:

```bash
npm run dev
```

Backend runs on `http://localhost:4000`

### 4. Start the frontend

```bash
cd ../frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`

---

## Admin account (after seeding)

```
Email:    admin@shopper.com
Password: admin123
```

---

## Project structure

```
E-Com/
├── backend/
│   ├── controllers/      # Route logic
│   ├── models/           # MongoDB schemas (User, Product, Cart, Order)
│   ├── routes/           # API routes
│   ├── middleware/        # JWT auth, admin check
│   ├── public/images/    # Product images served as static files
│   ├── seed.js           # Seeds 36 products + admin user
│   └── server.js         # Entry point
│
└── frontend/
    ├── src/
    │   ├── api/           # Axios instance with auth headers
    │   ├── context/       # ShopContext — cart, user, products
    │   ├── components/    # Navbar, Hero, Item, etc.
    │   ├── pages/         # Shop, Cart, Product, LoginSignup
    │   └── assets/        # Product data and images
    └── public/            # Static product PNGs
```

---

## API endpoints

| Method | Endpoint | What it does |
|--------|----------|--------------|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Log in, get JWT |
| GET | `/api/products` | List all products |
| GET | `/api/products/:id` | Single product |
| GET | `/api/cart` | Get your cart |
| POST | `/api/cart` | Add item to cart |
| DELETE | `/api/cart/:id` | Remove item |
| POST | `/api/payment/order` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment |
| GET | `/api/orders` | Your order history |

---

## Author

**Himanshu Jha** — [@himanshujha05](https://github.com/himanshujha05)

---

## License

MIT
