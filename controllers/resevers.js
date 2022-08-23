import resevers from '../models/resevers.js'

export const createResever = async (req, res) => {
  try {
    const result = await resevers.create({
      user: req.user._id,
      reseverDescription: req.body.reseverDescription,
      reseverShow: req.body.reseverShow,
      reseverDate: req.body.reseverDate,
      reseverCategory: req.body.reseverCategory
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

export const getResevers = async (req, res) => {
  try {
    const result = await resevers.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getUserResever = async (req, res) => {
  try {
    const result = await resevers.find().populate('user')
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getAllResevers = async (req, res) => {
  try {
    const result = await resevers.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getResever = async (req, res) => {
  try {
    const result = await resevers.findById(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const deleteResever = async (req, res) => {
  try {
    const result = await resevers.findByIdAndDelete(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const editResever = async (req, res) => {
  try {
    const data = {
      reseverDescription: req.body.reseverDescription,
      reseverShow: req.body.reseverShow,
      reseverDate: req.body.reseverDate,
      reseverCategory: req.body.reseverCategory
    }
    const result = await resevers.findByIdAndUpdate(req.params.id, data, { new: true })

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
