import mongoose from 'mongoose'

const doctorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '缺少名稱欄位']
  },
  image: {
    type: String,
    required: [true, '缺少圖片欄位']
  },
  description: {
    type: String,
    required: [true, '缺少描述欄位']
  },
  online: {
    type: Boolean,
    default: false
  }
}, { versionKey: false })

export default mongoose.model('doctors', doctorsSchema)
