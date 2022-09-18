const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');

// @desc    Upload files
// @route   POST /api/blog
// @access  Public
const FileUpload = asyncHandler(async (req, res) => {
  try {
    console.log(req.files);
    const { file1, file2 } = req.files;
    let filesArray = [];
    file1.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    file2.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    res.status(201).json({'Result':filesArray});
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//file size format
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
  );
};

module.exports = {
  FileUpload,
};
