import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import './passport/passport.js'
import userRouter from './routes/users.js'
import doctorRouter from './routes/doctors.js'
import articleRouter from './routes/articles.js'
import bannerRouter from './routes/banners.js'
import reseverRouter from './routes/resevers.js'

mongoose.connect(process.env.DB_URL)

const app = express()

app.use(cors({
  origin (origin, callback) {
    if (origin === undefined || origin.includes('github') || origin.includes('localhost')) {
      callback(null, true)
    } else {
      callback(new Error('Not Allowed'), false)
    }
  }
}))

app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '請求被拒絕' })
})

app.use(express.json())
app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '請求格式錯誤' })
})

app.use('/users', userRouter)
app.use('/doctors', doctorRouter)
app.use('/articles', articleRouter)
app.use('/banners', bannerRouter)
app.use('/resevers', reseverRouter)

app.all('*', (req, res) => {
  console.log(req)
  res.status(404).send({ success: false, message: '找不到' })
})

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running')
})
