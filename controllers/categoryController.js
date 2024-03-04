const Category = require('../models/category');

const CategoryController = {
  addCategory: async (req, res) => {
    try {
      const { name } = req.body;

      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ message: 'Category already exists' });
      }

      const newCategory = new Category({ name });
      await newCategory.save();

      res.status(201).json({ message: 'Category created successfully' });
    } catch (error) {
      console.error('Error in addCategory:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = CategoryController;
