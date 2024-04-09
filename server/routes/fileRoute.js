const router = require("express").Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./fileUpload")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const  upload = multer({storage:storage});
router.route("/file").post(upload.single('file'),(req,res)=>{
  console.log(req.body);
  console.log(req.file);
});

module.exports = router;
