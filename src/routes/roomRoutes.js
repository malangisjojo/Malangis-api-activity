const express = require('express');
const router = express.Router();
// Import controllers here...
const { protect, authorize } = require('../Middleware/authMiddleware');
const { getAllRooms } = require('../controllers/roomControllers');

// ANYONE can get dishes
router.get('/', getAllRooms);

// ONLY Admins and Managers can create dishes
router.post('/', protect, authorize('admin', 'manager'), createDish);

module.exports = router;