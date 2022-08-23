import mongoose from 'mongoose'

const articlesSchema = new mongoose.Schema({
  articleDate: {
    type: Date,
    default: Date.now()
  },
  articleTitle: {
    type: String,
    required: [true, '缺少標題欄位']
  },
  articlePic: {
    type: String,
    required: [true, '缺少圖片欄位']
  },
  articleDescription: {
    type: String,
    required: [true, '缺少描述欄位']
  },
  articleEditor: {
    type: String,
    required: [true, '缺少內容']
  },
  articleCategory: {
    type: String,
    enum: {
      values: ['齒顎矯正', '人工植牙', '美容牙科', '家庭牙科']
    }
  },
  articleShow: {
    type: Boolean,
    default: false
  }
}, { versionKey: false })

export default mongoose.model('articles', articlesSchema)
