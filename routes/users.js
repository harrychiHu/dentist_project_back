import express from 'express'
import * as auth from '../middleware/auth.js'
import content from '../middleware/content.js'
import admin from '../middleware/admin.js'
import {
  register,
  login,
  logout,
  extend,
  getUser,
  editUser,
  getAllUsers,
  deleteUsers,
  onlyUser
} from '../controllers/users.js'

const router = express.Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), auth.login, login)
router.delete('/logout', auth.jwt, logout)
router.post('/extend', auth.jwt, extend)
router.get('/', auth.jwt, getUser)
router.get('/search/:id', auth.jwt, admin, onlyUser)
router.patch('/:id', content('multipart/form-data'), auth.jwt, editUser)
router.get('/all', auth.jwt, admin, getAllUsers)
router.delete('/:id', auth.jwt, admin, deleteUsers)

export default router
