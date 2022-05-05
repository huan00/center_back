const { Category } = require('../models')

const newCategory = async (req, res) => {
  try {
    const newCateData = req.body
    const newCate = await Category.create(newCateData)
    if (newCate) {
      return res.status(201).send(newCate)
    }
    res.status(400).send({ msg: 'please check entry.' })
  } catch (error) {
    throw error
  }
}

module.exports = { newCategory }
