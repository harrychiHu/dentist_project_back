import mongoose from 'mongoose'

const bannersSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '缺少標題欄位']
  },
  image: {
    type: String,
    required: [true, '缺少圖片欄位']
  }
}, { versionKey: false })

export default mongoose.model('banners', bannersSchema)
