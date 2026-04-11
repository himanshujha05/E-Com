require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');

// Images served by the Express backend at /images/product_N.png
const img = (n) => [`http://localhost:4000/images/product_${n}.png`];

const products = [
  // Women (products 1–12)
  { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', category: 'women', new_price: 50.0,  old_price: 80.5,  stock: 20, description: 'Elegant flutter sleeve blouse perfect for casual and semi-formal occasions.', images: img(1) },
  { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', category: 'women', new_price: 85.0,  old_price: 120.5, stock: 15, description: 'Stylish peplum blouse with overlap collar design.', images: img(2) },
  { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', category: 'women', new_price: 60.0,  old_price: 100.5, stock: 18, description: 'Comfortable flutter sleeve blouse for all-day wear.', images: img(3) },
  { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', category: 'women', new_price: 100.0, old_price: 150.0, stock: 10, description: 'Premium quality peplum blouse with striped pattern.', images: img(4) },
  { name: 'Floral Print Wrap Midi Dress',                            category: 'women', new_price: 85.0,  old_price: 120.5, stock: 12, description: 'Beautiful floral print wrap dress for a feminine look.', images: img(5) },
  { name: 'Ribbed Knit Bodycon Dress',                               category: 'women', new_price: 85.0,  old_price: 120.5, stock: 8,  description: 'Form-fitting ribbed knit dress for a sleek silhouette.', images: img(6) },
  { name: 'Linen Button-Down Shirt Dress',                           category: 'women', new_price: 85.0,  old_price: 120.5, stock: 14, description: 'Breathable linen shirt dress perfect for summer.', images: img(7) },
  { name: 'Off-Shoulder Ruffled Blouse',                             category: 'women', new_price: 85.0,  old_price: 120.5, stock: 11, description: 'Trendy off-shoulder blouse with ruffled detailing.', images: img(8) },
  { name: 'High-Waist Wide-Leg Trousers',                            category: 'women', new_price: 85.0,  old_price: 120.5, stock: 9,  description: 'Chic high-waist wide-leg trousers for a polished look.', images: img(9) },
  { name: 'Satin Slip Midi Skirt',                                   category: 'women', new_price: 85.0,  old_price: 120.5, stock: 16, description: 'Elegant satin slip skirt with a bias cut silhouette.', images: img(10) },
  { name: 'Cropped Knit Cardigan',                                   category: 'women', new_price: 85.0,  old_price: 120.5, stock: 20, description: 'Cozy cropped cardigan for layering over any outfit.', images: img(11) },
  { name: 'Flared Denim Mini Skirt',                                 category: 'women', new_price: 85.0,  old_price: 120.5, stock: 13, description: 'Retro-inspired flared denim mini skirt.', images: img(12) },

  // Men (products 13–24)
  { name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', category: 'men', new_price: 85.0, old_price: 120.5, stock: 15, description: 'Slim fit bomber jacket with full-zip closure for a modern look.', images: img(13) },
  { name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', category: 'men', new_price: 85.0, old_price: 120.5, stock: 12, description: 'Versatile bomber jacket suitable for casual outings.', images: img(14) },
  { name: 'Classic Oxford Button-Down Shirt',                         category: 'men', new_price: 85.0, old_price: 120.5, stock: 20, description: 'Timeless oxford shirt for a smart casual look.', images: img(15) },
  { name: 'Slim Fit Chino Trousers',                                  category: 'men', new_price: 85.0, old_price: 120.5, stock: 18, description: 'Clean-cut chino trousers that pair well with anything.', images: img(16) },
  { name: 'Graphic Print Crew Neck T-Shirt',                          category: 'men', new_price: 85.0, old_price: 120.5, stock: 25, description: 'Bold graphic tee made from 100% organic cotton.', images: img(17) },
  { name: 'Quilted Puffer Vest',                                      category: 'men', new_price: 85.0, old_price: 120.5, stock: 10, description: 'Lightweight puffer vest for layering in cooler weather.', images: img(18) },
  { name: 'Relaxed Fit Cargo Joggers',                                category: 'men', new_price: 85.0, old_price: 120.5, stock: 14, description: 'Comfortable cargo joggers with multiple pockets.', images: img(19) },
  { name: 'Merino Wool V-Neck Sweater',                               category: 'men', new_price: 85.0, old_price: 120.5, stock: 11, description: 'Soft merino wool sweater for a refined casual look.', images: img(20) },
  { name: 'Stretch Denim Slim Jeans',                                 category: 'men', new_price: 85.0, old_price: 120.5, stock: 22, description: 'Four-way stretch denim jeans for all-day comfort.', images: img(21) },
  { name: 'Linen Blend Relaxed Shirt',                                category: 'men', new_price: 85.0, old_price: 120.5, stock: 16, description: 'Breezy linen blend shirt ideal for warm weather.', images: img(22) },
  { name: 'Waterproof Trail Jacket',                                  category: 'men', new_price: 85.0, old_price: 120.5, stock: 8,  description: 'Technical trail jacket with waterproof coating.', images: img(23) },
  { name: 'Classic Polo Shirt',                                       category: 'men', new_price: 85.0, old_price: 120.5, stock: 20, description: 'Pique cotton polo shirt in a versatile solid color.', images: img(24) },

  // Kids (products 25–36)
  { name: 'Boys Orange Colourblocked Hooded Sweatshirt', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 15, description: 'Fun colourblocked hoodie to keep kids warm and stylish.', images: img(25) },
  { name: 'Boys Orange Colourblocked Hooded Sweatshirt', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 18, description: 'Cozy hooded sweatshirt perfect for active kids.', images: img(26) },
  { name: 'Girls Floral Smocked Dress',                  category: 'kid', new_price: 85.0, old_price: 120.5, stock: 12, description: 'Pretty smocked dress with a playful floral pattern.', images: img(27) },
  { name: 'Kids Denim Overalls',                         category: 'kid', new_price: 85.0, old_price: 120.5, stock: 10, description: 'Durable denim overalls for adventurous little ones.', images: img(28) },
  { name: 'Boys Striped Rugby Shirt',                    category: 'kid', new_price: 85.0, old_price: 120.5, stock: 20, description: 'Classic striped rugby shirt for boys.', images: img(29) },
  { name: 'Girls Tutu Skirt Set',                        category: 'kid', new_price: 85.0, old_price: 120.5, stock: 14, description: 'Adorable tutu skirt set for little fashionistas.', images: img(30) },
  { name: 'Kids Fleece Zip-Up Hoodie',                   category: 'kid', new_price: 85.0, old_price: 120.5, stock: 16, description: 'Super soft fleece hoodie for chilly days.', images: img(31) },
  { name: 'Boys Cargo Shorts',                           category: 'kid', new_price: 85.0, old_price: 120.5, stock: 22, description: 'Practical cargo shorts with plenty of pocket space.', images: img(32) },
  { name: 'Girls Printed Leggings',                      category: 'kid', new_price: 85.0, old_price: 120.5, stock: 18, description: 'Stretchy printed leggings for active play.', images: img(33) },
  { name: 'Kids Puffer Jacket',                          category: 'kid', new_price: 85.0, old_price: 120.5, stock: 9,  description: 'Warm puffer jacket to keep kids cozy in winter.', images: img(34) },
  { name: 'Boys Graphic Tee',                            category: 'kid', new_price: 85.0, old_price: 120.5, stock: 25, description: 'Fun graphic tee kids will love to wear.', images: img(35) },
  { name: 'Girls Velvet Party Dress',                    category: 'kid', new_price: 85.0, old_price: 120.5, stock: 8,  description: 'Luxurious velvet dress perfect for special occasions.', images: img(36) },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    const inserted = await Product.insertMany(products);
    console.log(`Seeded ${inserted.length} products`);

    const adminExists = await User.findOne({ email: 'admin@shopper.com' });
    if (!adminExists) {
      await User.create({ name: 'Admin', email: 'admin@shopper.com', password: 'admin123', role: 'admin' });
      console.log('Admin created: admin@shopper.com / admin123');
    }

    console.log('\nSeed complete!');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
};

seed();
