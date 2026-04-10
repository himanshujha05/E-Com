const express = require('express');
const { getDashboard } = require('../controllers/adminController');
const { protect, isAdmin } = require('../middleware/auth');
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { getAllOrders, updateOrderStatus } = require('../controllers/orderController');

const router = express.Router();

router.use(protect, isAdmin);

router.get('/dashboard', getDashboard);

router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

router.get('/orders', getAllOrders);
router.put('/orders/:id/status', updateOrderStatus);

module.exports = router;
