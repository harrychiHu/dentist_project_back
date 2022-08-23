import mongoose from 'mongoose'

const reseversSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users',
    required: [true, '使用者必填']
  },
  reseverDate: {
    type: Date,
    default: Date.now()
  },
  reseverDescription: {
    type: String
  },
  reseverCategory: {
    type: String,
    enum: {
      values: ['齒顎矯正', '人工植牙', '美容牙科', '家庭牙科']
    }
  },
  reseverShow: {
    type: String,
    enum: {
      values: ['成功', '失敗', '等待']
    },
    default: '等待'
  }
}, { versionKey: false })

export default mongoose.model('resevers', reseversSchema)