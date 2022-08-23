import mongoose from 'mongoose'
import validator from 'validator'

const usersSchema = new mongoose.Schema({
  account: {
    type: String,
    required: [true, '帳號必填'],
    minlength: [4, '帳號必須 4 個字以上'],
    maxlength: [20, '帳號必須 20 個字以下'],
    unique: true,
    match: [/^[A-Za-z0-9]+$/, '帳號格式錯誤']
  },
  password: {
    type: String,
    required: [true, '密碼必填']
  },
  email: {
    type: String,
    required: [true, '信箱必填'],
    unique: true,
    validator: {
      validator (email) {
        return validator.isEmail(email)
      },
      message: '信箱格式錯誤'
    }
  },
  phoneNr: {
    type: String,
    match: [/^09\d{2}-?\d{3}-?\d{3}$/, '手機格式錯誤'],
    required: [true, '請填寫手機號碼']
  },
  name: {
    type: String,
    required: [true, '請填寫姓名']
  },
  tokens: {
    type: [String]
  },
  role: {
    // 0 = 使用者
    // 1 = 管理者
    type: Number,
    default: 0
  }
}, { versionKey: false })

export default mongoose.model('users', usersSchema)
