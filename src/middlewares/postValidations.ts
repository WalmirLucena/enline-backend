import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import { Request } from 'express';

const imageFilter = (req: Request, file: any, cb: any) => {
  const allowedMimes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/gif',

  ];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb('Please upload only images.', false);
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
