const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');

const getDashboard = async (req, res) => {
  try {
    const [totalOrders, totalUsers, totalProducts, revenueResult] = await Promise.all([
      Order.countDocuments(),
      User.countDocuments({ role: 'user' }),
      Product.countDocuments(),
      Order.aggregate([
        { $match: { paymentStatus: 'paid' } },
        { $group: { _id: null, total: { $sum: '$totalPrice' } } },
      ]),
    ]);

    const revenue = revenueResult[0]?.total || 0;

    return res.json({
      success: true,
      data: { totalOrders, totalUsers, totalProducts, revenue },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getDashboard };
