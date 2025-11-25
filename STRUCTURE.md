# 📁 Project Structure Guide

This document explains the organization and purpose of each directory in the E-Com project.

## 🗂️ Root Structure

```
E-Com/
├── frontend/              # React application (main codebase)
├── .git/                  # Git version control
├── .gitignore             # Git ignore rules
├── package-lock.json      # Root package lock (if needed for workspace)
└── README.md              # Main project documentation
```

---

## 🎨 Frontend Structure

```
frontend/
├── public/                # Static files served directly
│   ├── index.html        # HTML template
│   ├── manifest.json     # PWA manifest
│   └── robots.txt        # SEO robots file
│
├── src/                   # Source code
│   ├── components/       # Reusable UI components
│   │   ├── Navbar/      # Navigation bar component
│   │   ├── Footer/      # Footer component
│   │   ├── Hero/        # Hero section (banner)
│   │   ├── Popular/     # Popular products section
│   │   ├── Offers/      # Special offers section
│   │   ├── NewCollections/  # New collections section
│   │   ├── NewsLetter/  # Newsletter subscription
│   │   └── Item/        # Product item card
│   │
│   ├── pages/           # Page-level components (routes)
│   │   ├── Shop.jsx           # Home/shop page
│   │   ├── ShopCategory.jsx   # Category browsing page
│   │   ├── Product.jsx        # Individual product detail page
│   │   ├── Cart.jsx           # Shopping cart page
│   │   └── LoginSignup.jsx    # Authentication page
│   │
│   ├── assets/          # Static assets and data
│   │   ├── all_product.js      # All products data
│   │   ├── data.js             # App data/configuration
│   │   └── new_collections.js  # New collections data
│   │
│   ├── App.js           # Main App component with routing
│   ├── App.css          # Global app styles
│   ├── index.js         # React entry point
│   ├── index.css        # Global CSS
│   ├── setupTests.js    # Test configuration
│   └── reportWebVitals.js  # Performance monitoring
│
├── package.json          # Dependencies and scripts
├── package-lock.json     # Locked dependency versions
├── .env.example          # Environment variables template
└── README.md             # Frontend-specific documentation
```

---

## 📂 Directory Purposes

### `/frontend/src/components/`
Contains **reusable UI components** that can be used across multiple pages. Each component has its own folder with:
- `.jsx` file - Component logic and JSX
- `.css` file - Component-specific styles

**Components:**
- **Navbar** - Top navigation bar with links and branding
- **Footer** - Page footer with links and info
- **Hero** - Large banner/hero section on homepage
- **Popular** - Displays popular products
- **Offers** - Shows special offers/promotions
- **NewCollections** - Showcases new product collections
- **NewsLetter** - Email subscription form
- **Item** - Individual product card (reusable)

### `/frontend/src/pages/`
Contains **page-level components** that correspond to routes in the application:
- **Shop.jsx** - Homepage with all sections (Hero, Popular, Offers, etc.)
- **ShopCategory.jsx** - Category-specific product listing (Men's/Women's/Kids)
- **Product.jsx** - Individual product details page
- **Cart.jsx** - Shopping cart with checkout
- **LoginSignup.jsx** - User authentication (login/register)

### `/frontend/src/assets/`
Contains **static data files** and assets:
- **all_product.js** - Array of all product data
- **data.js** - App configuration and data
- **new_collections.js** - Featured new collection products
- Images, icons, and other static files (to be added)

### `/frontend/public/`
Contains **static files** served directly without processing:
- **index.html** - HTML template
- **manifest.json** - PWA configuration
- **robots.txt** - Search engine crawling rules
- Favicon and other public assets

---

## 🎯 Best Practices

### Component Organization
- Each component in its own folder
- Co-locate component file with its styles
- Use PascalCase for component names
- Use descriptive names that explain purpose

### File Naming Conventions
- Components: `ComponentName.jsx`
- Styles: `ComponentName.css`
- Pages: `PageName.jsx`
- Folders: lowercase or camelCase for clarity

### Import Paths
- Use relative imports: `./components/`, `./pages/`, `./assets/`
- Keep import paths consistent
- Group imports: React → Third-party → Local

---

## 🔄 Future Structure (Planned)

```
E-Com/
├── frontend/             # React app
├── backend/              # Node.js/Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
├── database/             # Database schemas/migrations
└── docs/                 # Additional documentation
```

---

## 📚 Related Documentation
- Main README: `../README.md`
- Component documentation: Add JSDoc comments in components
- API documentation: Coming soon with backend

---

## 🆘 Getting Started
1. Read the main `README.md` for setup instructions
2. Check `.env.example` for configuration
3. Browse components in `/frontend/src/components/`
4. Start with `App.js` to understand routing
5. Explore pages in `/frontend/src/pages/`

---

**Last Updated:** November 25, 2025
