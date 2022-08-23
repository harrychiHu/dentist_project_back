import mongoose from 'mongoose'

const userRsvdSchema = new mongoose.Schema({
  userRsvdDates: {
    type: String,
    enum: {
      values: ['預約成功', '預約取消']
    }
  }
}, { versionKey: false })

export default mongoose.model('userRsvdDates', userRsvdSchema)
