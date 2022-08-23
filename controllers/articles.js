import articles from '../models/articles.js'

export const createArticle = async (req, res) => {
  try {
    const result = await articles.create({
      articleTitle: req.body.articleTitle,
      articlePic: req.files.articlePic?.[0]?.path || '',
      articleDescription: req.body.articleDescription,
      articleShow: req.body.articleShow,
      articleDate: req.body.articleDate,
      articleEditor: req.body.articleEditor,
      articleCategory: req.body.articleCategory
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
    const result = await articles.find({ articleShow: true })
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
      articleTitle: req.body.articleTitle,
      articleDescription: req.body.articleDescription,
      articleShow: req.body.articleShow,
      articleEditor: req.body.articleEditor,
      articleCategory: req.body.articleCategory,
      articleDate: req.body.articleDate
    }
    if (req.file) data.image = req.files.articlePic?.[0]?.path
    const result = await articles.findByIdAndUpdate(req.params.id, data, { new: true })

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
