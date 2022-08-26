import articles from '../models/articles.js'

export const createArticle = async (req, res) => {
  try {
    const result = await articles.create({
      title: req.body.title,
      image: req.file?.path || '',
      description: req.body.description,
      online: req.body.online,
      date: req.body.date,
      editor: req.body.editor,
      category: req.body.category
    })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const getArticles = async (req, res) => {
  try {
    const result = await articles.find({ online: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getOneArticles = async (req, res) => {
  try {
    const result = await articles.findById(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getAllArticles = async (req, res) => {
  try {
    const result = await articles.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
export const getUserAllArticles = async (req, res) => {
  try {
    const result = await articles.find({ online: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getArticle = async (req, res) => {
  try {
    const result = await articles.findById(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const deleteArticle = async (req, res) => {
  try {
    const result = await articles.findByIdAndDelete(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const editArticle = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      online: req.body.online,
      editor: req.body.editor,
      category: req.body.category,
      date: req.body.date
    }
    if (req.file) data.image = req.file.path
    const result = await articles.findByIdAndUpdate(req.params.id, data, { new: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
      console.log(error)
    }
  }
}
