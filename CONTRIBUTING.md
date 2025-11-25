# Development Guidelines

## 🚀 Quick Start
```bash
cd frontend
npm install
npm start
```

## 📝 Coding Standards

### React Components
- Use functional components with hooks
- Export one component per file
- Use PascalCase for component names
- Add PropTypes or TypeScript for type checking

### CSS
- Use component-specific CSS files
- Follow BEM naming convention when possible
- Keep styles scoped to components
- Use CSS variables for theme colors

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Commit with meaningful messages
git commit -m "Add: description of what you added"
git commit -m "Fix: description of what you fixed"
git commit -m "Update: description of what you updated"

# Push and create PR
git push origin feature/your-feature-name
```

## 🧪 Testing
```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📦 Building
```bash
# Production build
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## 🔧 Troubleshooting

### Common Issues
1. **Port already in use**: Change port in package.json or kill the process
2. **Module not found**: Delete node_modules and reinstall
3. **Styles not updating**: Clear browser cache or restart dev server

### Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)
