// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedProductTags = require('../seeds/product-tag-seeds');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    //establishes connecting column with ProductTag
    model: ProductTag,
    foreignKey: 'product_id',
  },
  as: 'marked_product'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    //establishes connecting column with ProductTag
    model: ProductTag,
    foreignKey: 'tag_id',
  },
  as: 'product_spec'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
