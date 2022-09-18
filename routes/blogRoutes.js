'use strict';

const express = require('express');
const router = express.Router();
const { FileUpload } = require('../controllers/blogControll');
const { uploadMultiple } = require('../utils/filehelper');

router.post('/', uploadMultiple, FileUpload);

module.exports = router;
