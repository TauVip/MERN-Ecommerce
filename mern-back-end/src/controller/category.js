const Category = require('../models/category')
const slugify = require('slugify')

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name)
  }

  if (req.body.parentId) categoryObj.parentId = req.body.parentId

  const cat = new Category(categoryObj)
  cat.save((error, category) =>
    error ? res.status(400).json({ error }) : res.status(201).json({ category })
  )
}
