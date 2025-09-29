const express = require('express');
const appCtrl = require('../controllers/applicantController');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

router.post('/', asyncHandler(appCtrl.createApplicant));
router.get('/', asyncHandler(appCtrl.getAllApplicants));
router.get('/:id', asyncHandler(appCtrl.getApplicantById));
router.put('/:id', asyncHandler(appCtrl.updateApplicant));
router.delete('/:id', asyncHandler(appCtrl.deleteApplicant));

router.post('/shortlist/:jobId', asyncHandler(appCtrl.shortlistApplicants));
router.get('/status/:status', asyncHandler(appCtrl.getApplicantsByStatus));

module.exports = router;
