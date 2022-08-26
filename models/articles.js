import mongoose from 'mongoose'

const articlesSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  title: {
    type: String,
    required: [true, '缺少標題欄位']
  },
  image: {
    type: String,
    required: [true, '缺少圖片欄位']
  },
  description: {
    type: String,
    required: [true, '缺少描述欄位']
  },
  editor: {
    type: String,
    required: [true, '缺少內容']
  },
  category: {
    type: String,
    enum: {
      values: ['口腔保健', '牙齒矯正', '牙齒美容', '食譜保健']
    }
  },
  online: {
    type: Boolean,
    default: false
  }
}, { versionKey: false })

export default mongoose.model('articles', articlesSchema)
