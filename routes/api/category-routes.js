const router = require('express').Router();
const { Category, Product } = require('../../models');
const { sequelize } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne(req.params.id,
      {
        include: [Product]
      });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };

});

router.post('/', (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  };

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body,
      {
        where: { id: req.params.id }
      });
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value (destroy)
  try {
    const delCategory = await Category.destroy(
      {
        where: { id: req.params.id }
      });
    res.status(200).json(delCategory);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
