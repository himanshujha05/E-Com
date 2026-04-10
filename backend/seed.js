require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');

const products = [
  // Women (12 products)
  { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', category: 'women', new_price: 50.0, old_price: 80.5, stock: 20, description: 'Elegant flutter sleeve blouse perfect for casual and semi-formal occasions.', images: [] },
  { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', category: 'women', new_price: 85.0, old_price: 120.5, stock: 15, description: 'Stylish peplum blouse with overlap collar design.', images: [] },
  { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', category: 'women', new_price: 60.0, old_price: 100.5, stock: 18, description: 'Comfortable flutter sleeve blouse for all-day wear.', images: [] },
  { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', category: 'women', new_price: 100.0, old_price: 150.0, stock: 10, description: 'Premium quality peplum blouse with striped pattern.', images: [] },
  { name: 'Floral Print Wrap Midi Dress', category: 'women', new_price: 85.0, old_price: 120.5, stock: 12, description: 'Beautiful floral print wrap dress for a feminine look.', images: [] },
  { name: 'Ribbed Knit Bodycon Dress', category: 'women', new_price: 85.0, old_price: 120.5, stock: 8, description: 'Form-fitting ribbed knit dress for a sleek silhouette.', images: [] },
  { name: 'Linen Button-Down Shirt Dress', category: 'women', new_price: 85.0, old_price: 120.5, stock: 14, description: 'Breathable linen shirt dress perfect for summer.', images: [] },
  { name: 'Off-Shoulder Ruffled Blouse', category: 'women', new_price: 85.0, old_price: 120.5, stock: 11, description: 'Trendy off-shoulder blouse with ruffled detailing.', images: [] },
  { name: 'High-Waist Wide-Leg Trousers', category: 'women', new_price: 85.0, old_price: 120.5, stock: 9, description: 'Chic high-waist wide-leg trousers for a polished look.', images: [] },
  { name: 'Satin Slip Midi Skirt', category: 'women', new_price: 85.0, old_price: 120.5, stock: 16, description: 'Elegant satin slip skirt with a bias cut silhouette.', images: [] },
  { name: 'Cropped Knit Cardigan', category: 'women', new_price: 85.0, old_price: 120.5, stock: 20, description: 'Cozy cropped cardigan for layering over any outfit.', images: [] },
  { name: 'Flared Denim Mini Skirt', category: 'women', new_price: 85.0, old_price: 120.5, stock: 13, description: 'Retro-inspired flared denim mini skirt.', images: [] },

  // Men (12 products)
  { name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', category: 'men', new_price: 85.0, old_price: 120.5, stock: 15, description: 'Slim fit bomber jacket with full-zip closure for a modern look.', images: [] },
  { name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', category: 'men', new_price: 85.0, old_price: 120.5, stock: 12, description: 'Versatile bomber jacket suitable for casual outings.', images: [] },
  { name: 'Classic Oxford Button-Down Shirt', category: 'men', new_price: 85.0, old_price: 120.5, stock: 20, description: 'Timeless oxford shirt for a smart casual look.', images: [] },
  { name: 'Slim Fit Chino Trousers', category: 'men', new_price: 85.0, old_price: 120.5, stock: 18, description: 'Clean-cut chino trousers that pair well with anything.', images: [] },
  { name: 'Graphic Print Crew Neck T-Shirt', category: 'men', new_price: 85.0, old_price: 120.5, stock: 25, description: 'Bold graphic tee made from 100% organic cotton.', images: [] },
  { name: 'Quilted Puffer Vest', category: 'men', new_price: 85.0, old_price: 120.5, stock: 10, description: 'Lightweight puffer vest for layering in cooler weather.', images: [] },
  { name: 'Relaxed Fit Cargo Joggers', category: 'men', new_price: 85.0, old_price: 120.5, stock: 14, description: 'Comfortable cargo joggers with multiple pockets.', images: [] },
  { name: 'Merino Wool V-Neck Sweater', category: 'men', new_price: 85.0, old_price: 120.5, stock: 11, description: 'Soft merino wool sweater for a refined casual look.', images: [] },
  { name: 'Stretch Denim Slim Jeans', category: 'men', new_price: 85.0, old_price: 120.5, stock: 22, description: 'Four-way stretch denim jeans for all-day comfort.', images: [] },
  { name: 'Linen Blend Relaxed Shirt', category: 'men', new_price: 85.0, old_price: 120.5, stock: 16, description: 'Breezy linen blend shirt ideal for warm weather.', images: [] },
  { name: 'Waterproof Trail Jacket', category: 'men', new_price: 85.0, old_price: 120.5, stock: 8, description: 'Technical trail jacket with waterproof coating.', images: [] },
  { name: 'Classic Polo Shirt', category: 'men', new_price: 85.0, old_price: 120.5, stock: 20, description: 'Pique cotton polo shirt in a versatile solid color.', images: [] },

  // Kids (12 products)
  { name: 'Boys Orange Colourblocked Hooded Sweatshirt', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 15, description: 'Fun colourblocked hoodie to keep kids warm and stylish.', images: [] },
  { name: 'Boys Orange Colourblocked Hooded Sweatshirt', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 18, description: 'Cozy hooded sweatshirt perfect for active kids.', images: [] },
  { name: 'Girls Floral Smocked Dress', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 12, description: 'Pretty smocked dress with a playful floral pattern.', images: [] },
  { name: 'Kids Denim Overalls', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 10, description: 'Durable denim overalls for adventurous little ones.', images: [] },
  { name: 'Boys Striped Rugby Shirt', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 20, description: 'Classic striped rugby shirt for boys.', images: [] },
  { name: 'Girls Tutu Skirt Set', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 14, description: 'Adorable tutu skirt set for little fashionistas.', images: [] },
  { name: 'Kids Fleece Zip-Up Hoodie', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 16, description: 'Super soft fleece hoodie for chilly days.', images: [] },
  { name: 'Boys Cargo Shorts', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 22, description: 'Practical cargo shorts with plenty of pocket space.', images: [] },
  { name: 'Girls Printed Leggings', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 18, description: 'Stretchy printed leggings for active play.', images: [] },
  { name: 'Kids Puffer Jacket', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 9, description: 'Warm puffer jacket to keep kids cozy in winter.', images: [] },
  { name: 'Boys Graphic Tee', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 25, description: 'Fun graphic tee kids will love to wear.', images: [] },
  { name: 'Girls Velvet Party Dress', category: 'kid', new_price: 85.0, old_price: 120.5, stock: 8, description: 'Luxurious velvet dress perfect for special occasions.', images: [] },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert all products
    const inserted = await Product.insertMany(products);
    console.log(`Seeded ${inserted.length} products`);

    // Create admin user if not exists
    const adminExists = await User.findOne({ email: 'admin@shopper.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin',
        email: 'admin@shopper.com',
        password: 'admin123',
        role: 'admin',
      });
      console.log('Admin user created: admin@shopper.com / admin123');
    } else {
      console.log('Admin user already exists');
    }

    console.log('\nSeed complete!');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
};

seed();
