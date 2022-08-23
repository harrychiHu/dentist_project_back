import doctors from '../models/doctors.js'

export const createDoctor = async (req, res) => {
  try {
    const result = await doctors.create({
      doctorName: req.body.doctorName,
      doctorPic: req.files.doctorPic?.[0]?.path || '',
      doctorDescription: req.body.doctorDescription,
      doctorShow: req.body.doctorShow
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

export const getDoctors = async (req, res) => {
  try {
    const result = await doctors.find({ doctorShow: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getAllDoctors = async (req, res) => {
  try {
    const result = await doctors.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getDoctor = async (req, res) => {
  try {
    const result = await doctors.findById(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const deleteDoctor = async (req, res) => {
  try {
    const result = await doctors.findByIdAndDelete(req.params.id)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const editDoctor = async (req, res) => {
  try {
    const data = {
      doctorName: req.body.doctorName,
      doctorDescription: req.body.doctorDescription,
      doctorShow: req.body.doctorShow
    }
    if (req.file) data.image = req.files.doctorPic?.[0]?.path
    const result = await doctors.findByIdAndUpdate(req.params.id, data, { new: true })

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
