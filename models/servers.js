import mongoose from 'mongoose'

const serversSchema = new mongoose.Schema({
  servers: {
    type: String,
    enum: {
      values: ['齒顎矯正', '人工植牙', '美容牙科', '家庭牙科']
    }
  }
}, { versionKey: false })

export default mongoose.model('servers', serversSchema)
