import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import { Request, Express } from 'express';

const imageFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedMimes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/vnd.ms-powerpoint',
    'application/msword',

  ];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err, file.originalname);

      const fileName = `${hash.toString('hex')}-${file.originalname}`;

      cb(null, fileName);
    });
  },
});

const uploadFile = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: imageFilter,
}).single('file');

export default uploadFile;
