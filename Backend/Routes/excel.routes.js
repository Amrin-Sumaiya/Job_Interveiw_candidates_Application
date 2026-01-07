import express from 'express';
import multer from 'multer';
import { uploadExcelData } from '../Controllers/excel.controller.js';


const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "data/"),
    filename: (req, file, cb) =>
        cb(null, Date.now() + "-" + file.originalname)

});

const upload = multer({ storage });

//post/ api/excel/upload
router.post("/upload", upload.single("file"), uploadExcelData);

export default router; 