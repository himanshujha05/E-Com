# 🎯 Quick Reference Guide

## 📂 Where to Find Things

| What you need | Location |
|---------------|----------|
| Components | `frontend/src/components/` |
| Pages | `frontend/src/pages/` |
| Product data | `frontend/src/assets/` |
| Styles | Next to each component |
| App routing | `frontend/src/App.js` |
| Configuration | `frontend/.env.example` |

## 🛠️ Common Commands

```bash
# Start development
cd frontend
npm start

# Install new package
npm install package-name

# Build for production
npm run build

# Run tests
npm test
```

## 🗺️ Routes

| URL | Page | Component |
|-----|------|-----------|
| `/` | Home | `Shop.jsx` |
| `/mens` | Men's Category | `ShopCategory.jsx` |
| `/womens` | Women's Category | `ShopCategory.jsx` |
| `/kids` | Kids Category | `ShopCategory.jsx` |
| `/product/:id` | Product Details | `Product.jsx` |
| `/cart` | Shopping Cart | `Cart.jsx` |
| `/login` | Login/Signup | `LoginSignup.jsx` |

## 🎨 Adding New Component

1. Create folder in `frontend/src/components/YourComponent/`
2. Create `YourComponent.jsx`
3. Create `YourComponent.css`
4. Import and use in pages

```jsx
// YourComponent.jsx
import React from 'react';
import './YourComponent.css';

const YourComponent = () => {
  return (
    <div className="your-component">
      {/* Your code */}
    </div>
  );
};

export default YourComponent;
```

## 📄 Adding New Page

1. Create file in `frontend/src/pages/YourPage.jsx`
2. Add route in `App.js`:
```jsx
<Route path='/yourpath' element={<YourPage />} />
```

## 📦 Project Status

✅ **Working:**
- Project structure organized
- React routing configured
- Basic components created
- Responsive navbar and footer

🚧 **In Progress:**
- Product detail pages
- Shopping cart functionality
- User authentication

📅 **Planned:**
- Backend API
- Database integration
- Payment processing
- Admin panel

## 🆘 Need Help?

1. Check `STRUCTURE.md` for folder organization
2. Read `CONTRIBUTING.md` for development guidelines
3. See `README.md` for setup instructions
4. Look at existing components for examples

## 🐛 Debugging Tips

- Check browser console for errors
- Verify import paths are correct
- Ensure dev server is running
- Clear cache if styles don't update
- Check React DevTools for component state

---

**Happy Coding! 🚀**
