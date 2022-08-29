import mongoose from 'mongoose'

const reseversSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users',
    required: [true, '使用者必填']
  },
  date: {
    type: Date,
    default: Date.now()
  },
  description: {
    type: String
  },
  category: {
    type: String,
    enum: {
      values: ['齒顎矯正', '人工植牙', '美容牙科', '家庭牙科']
    }
  },
  situation: {
    type: String,
    enum: {
      values: ['成功', '失敗', '等待']
    },
    default: '等待'
  }
}, { versionKey: false })

export default mongoose.model('resevers', reseversSchema)
