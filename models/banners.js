import mongoose from 'mongoose'

const bannersSchema = new mongoose.Schema({
  bannerTitle: {
    type: String,
    required: [true, '缺少標題欄位']
  },
  bannerPic: {
    type: String,
    required: [true, '缺少圖片欄位']
  }
}, { versionKey: false })

export default mongoose.model('banners', bannersSchema)
