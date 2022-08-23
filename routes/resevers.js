import express from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import {
  createResever,
  getResevers,
  getAllResevers,
  editResever,
  getResever,
  deleteResever,
  getUserResever
} from '../controllers/resevers.js'

const router = express.Router()

router.post('/', auth.jwt, createResever)
router.get('/', getResevers)
router.get('/get', auth.jwt, getUserResever)
router.get('/all', auth.jwt, getAllResevers)
router.get('/allHome', getAllResevers)
router.get('/:id', getResever)
router.patch('/:id', content('multipart/form-data'), auth.jwt, admin, upload, editResever)
router.delete('/:id', auth.jwt, admin, deleteResever)

export default router
