const express = require('express');
const router = express.Router();

// Import the Controller
const {
  getAllRooms,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
} = require('../controllers/roomControllers');

// Import auth routes
const authRoutes = require('./authRoutes');

// Routes
router.get('/rooms', getAllRooms);
router.post('/rooms', createRoom);
router.get('/rooms/:id', getRoomById);
router.put('/rooms/:id', updateRoom);
router.delete('/rooms/:id', deleteRoom);

// Auth Routes
router.use('/auth', authRoutes);

module.exports = router;
