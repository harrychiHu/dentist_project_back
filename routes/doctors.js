import express from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import {
  createDoctor,
  getDoctors,
  getAllDoctors,
  getDoctor,
  editDoctor,
  deleteDoctor
} from '../controllers/doctors.js'

const router = express.Router()

router.post('/', content('multipart/form-data'), auth.jwt, admin, upload, createDoctor)
router.get('/', getDoctors)
router.get('/all', auth.jwt, admin, getAllDoctors)
router.get('/allHome', getAllDoctors)
router.get('/:id', getDoctor)
router.patch('/:id', content('multipart/form-data'), auth.jwt, admin, upload, editDoctor)
router.delete('/:id', auth.jwt, admin, deleteDoctor)

export default router
