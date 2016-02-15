var express = require('express');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var router = express.Router();

/* Locations Page. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Others Page. */
router.get('/about', ctrlOthers.about);

module.exports = router;
