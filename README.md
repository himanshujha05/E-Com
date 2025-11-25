# 🛍️ E-Com

A modern e-commerce web application built with **React** and **Node.js**.
This project features product listings, shopping cart functionality, and category-based browsing.

---

## 🚀 Features
- 🏠 Home page with hero section, popular products, and special offers
- 🛍️ Product categories (Men's, Women's, Kids)
- 🛒 Shopping cart functionality
- 👤 User authentication (Login/Signup)
- 📱 Responsive design
- 🔍 Product browsing and filtering

---

## 🧩 Tech Stack
| Category | Technology |
|----------|------------|
| Frontend | React 19 + Create React App |
| Routing | React Router DOM v7 |
| Styling | CSS Modules |
| State | Context API / Redux (coming soon) |
| Backend | Node.js + Express (coming soon) |
| Database | MongoDB / Firebase (coming soon) |

---

## 🧰 Setup & Run

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/himanshujha05/E-Com.git
cd E-Com

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The app will run on `http://localhost:3000`

---

## 🗂️ Folder Structure
```
E-Com/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── Hero/
│   │   │   ├── Popular/
│   │   │   ├── Offers/
│   │   │   ├── NewCollections/
│   │   │   ├── NewsLetter/
│   │   │   └── Item/
│   │   ├── pages/           # Page components
│   │   │   ├── Shop.jsx
│   │   │   ├── ShopCategory.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── LoginSignup.jsx
│   │   ├── assets/          # Static assets & data
│   │   │   ├── all_product.js
│   │   │   ├── data.js
│   │   │   └── new_collections.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🛣️ Routes
- `/` - Home page (Shop)
- `/mens` - Men's category
- `/womens` - Women's category
- `/kids` - Kids category
- `/product/:productId` - Individual product page
- `/cart` - Shopping cart
- `/login` - Login/Signup page

---

## 📦 Available Scripts

In the `frontend` directory:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

---

## 🚧 Coming Soon
- Backend API with Node.js & Express
- Database integration (MongoDB)
- User authentication & authorization
- Product search functionality
- Payment gateway integration
- Admin dashboard
- Order management

---

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author
**Himanshu Jha**
- GitHub: [@himanshujha05](https://github.com/himanshujha05)

## 🧠 Roadmap
- [ ] Complete product listing page
- [ ] Add cart and checkout logic
- [ ] Integrate backend API
- [ ] Deploy to Vercel / Netlify

## 📄 License
MIT License © 2025 Himanshu Jha
