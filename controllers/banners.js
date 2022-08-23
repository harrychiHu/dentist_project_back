import banners from '../models/banners.js'

export const createBanner = async (req, res) => {
  try {
    const result = await banners.create({
      bannerTitle: req.body.bannerTitle,
      bannerPic: req.files.bannerPic?.[0]?.path || ''
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

export const getBanners = async (req, res) => {
  try {
    const result = await banners.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getAllBanners = async (req, res) => {
  try {
    const result = await banners.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getBanner = async (req, res) => {
  try {
    const result = await banners.findById(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const deleteBanner = async (req, res) => {
  try {
    const result = await banners.findByIdAndDelete(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const editBanner = async (req, res) => {
  try {
    const data = {
      bannerTitle: req.body.bannerTitle
    }
    if (req.file) data.image = req.files.bannerPic?.[0]?.path
    const result = await banners.findByIdAndUpdate(req.params.id, data, { new: true })

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
