import mongoose from 'mongoose'

const doctorsSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: [true, '缺少名稱欄位']
  },
  doctorPic: {
    type: String,
    required: [true, '缺少圖片欄位']
  },
  doctorDescription: {
    type: String,
    required: [true, '缺少描述欄位']
  },
  doctorShow: {
    type: Boolean,
    default: false
  }
}, { versionKey: false })

export default mongoose.model('doctors', doctorsSchema)
