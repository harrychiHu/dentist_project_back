import express from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import {
  createArticle,
  getArticles,
  getAllArticles,
  getArticle,
  editArticle,
  deleteArticle
} from '../controllers/articles.js'

const router = express.Router()

router.post('/', content('multipart/form-data'), auth.jwt, admin, upload, createArticle)
router.get('/', getArticles)
router.get('/all', auth.jwt, admin, getAllArticles)
router.get('/allHome', getAllArticles)
router.get('/:id', getArticle)
router.patch('/:id', content('multipart/form-data'), auth.jwt, admin, upload, editArticle)
router.delete('/:id', auth.jwt, admin, deleteArticle)

export default router
