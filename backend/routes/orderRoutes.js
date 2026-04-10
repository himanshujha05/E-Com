const express = require('express');
const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/orderController');
const { protect, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.post('/', createOrder);
router.get('/my', getMyOrders);
router.get('/', isAdmin, getAllOrders);
router.put('/:id/status', isAdmin, updateOrderStatus);

module.exports = router;
