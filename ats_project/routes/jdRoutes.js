const express = require('express');
const jdCtrl = require('../controllers/jdController');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

router.post('/', asyncHandler(jdCtrl.createJD));
router.get('/', asyncHandler(jdCtrl.getAllJDs));
router.get('/:id', asyncHandler(jdCtrl.getJDById));
router.put('/:id', asyncHandler(jdCtrl.updateJD));
router.delete('/:id', asyncHandler(jdCtrl.deleteJD));

module.exports = router;
