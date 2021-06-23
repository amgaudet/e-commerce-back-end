const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'product_tag' }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findOne(req.params.id,
      {
        include: [{ model: Product, through: ProductTag, as: 'product_spec' }]
      });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(404).json('No tag with this id');
  };
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const newData = await Tag.create(req.body);
    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body,
      {
        where: { id: req.params.id }
      });
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const delTag = await Tag.destroy(
      {
        where: { id: req.params.id }
      });
    res.status(200).json(delTag);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
