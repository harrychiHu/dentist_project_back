import mongoose from 'mongoose'

const listsSchema = new mongoose.Schema({
  userName: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  userPhoneNr: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  userEmail: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  userDate: {
    type: Date,
    default: Date.now(),
    required: [true, '請選擇預約時間']
  },
  userServer: {
    type: mongoose.ObjectId,
    ref: 'servers',
    required: [true, '請選擇服務項目']
  },
  userDoctor: {
    type: [
      {
        doctor: {
          type: mongoose.ObjectId,
          ref: 'doctors',
          required: [true, '選醫生']
        }
      }
    ]
  },
  userReserveDate: {
    type: String,
    ref: 'userRsrvdDate',
    immutable: doc => doc.role !== '1'
  },
  description: {
    type: String
  }

}, { versionKey: false })

export default mongoose.model('lists', listsSchema)
