import 'dotenv/config';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import multer from 'multer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const root = path.dirname(fileURLToPath(import.meta.url));
const contentFile = path.join(root, 'portfolio.json');
const uploadsDir = path.join(root, 'uploads');
const port = process.env.PORT || 3001;
const secret = process.env.JWT_SECRET;
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

if (!secret || !adminEmail || !adminPassword) {
  console.error(
    'Missing ADMIN_EMAIL, ADMIN_PASSWORD, or JWT_SECRET. Copy .env.example to .env and set all values.'
  );
  process.exit(1);
}

app.use(express.json({ limit: '1mb' }));
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
app.use(cors({ origin: allowedOrigins }));
await fs.mkdir(uploadsDir, { recursive: true });
app.use('/uploads', express.static(uploadsDir));
const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadsDir),
    filename: (_req, file, cb) =>
      cb(
        null,
        `${Date.now()}-${Math.random().toString(36).slice(2)}${path.extname(file.originalname).toLowerCase()}`
      ),
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => cb(null, /^image\/(jpeg|png|webp|gif)$/.test(file.mimetype)),
});
const readContent = async () => JSON.parse(await fs.readFile(contentFile, 'utf8'));
const authorize = (req, res, next) => {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, '');
  try {
    req.admin = jwt.verify(token, secret);
    next();
  } catch {
    res.status(401).json({ error: 'Authentication required.' });
  }
};

app.get('/api/portfolio', async (_req, res) => res.json(await readContent()));
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body || {};
  const emailOk = email?.trim().toLowerCase() === adminEmail.trim().toLowerCase();
  const passwordOk = await bcrypt.compare(password || '', await bcrypt.hash(adminPassword, 10));
  if (!emailOk || !passwordOk) return res.status(401).json({ error: 'Invalid email or password.' });
  res.json({ token: jwt.sign({ email: adminEmail, role: 'admin' }, secret, { expiresIn: '8h' }) });
});
app.post('/api/uploads/profile-photo', authorize, upload.single('photo'), (req, res) => {
  if (!req.file)
    return res.status(400).json({ error: 'Choose a JPEG, PNG, WebP, or GIF image up to 5 MB.' });
  res
    .status(201)
    .json({ url: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` });
});
app.put('/api/portfolio', authorize, async (req, res) => {
  const { profile, skills, experience, education = [], projects } = req.body || {};
  if (
    !profile ||
    !Array.isArray(skills) ||
    !Array.isArray(experience) ||
    !Array.isArray(education) ||
    !Array.isArray(projects)
  )
    return res.status(400).json({ error: 'Invalid portfolio content.' });
  await fs.writeFile(
    contentFile,
    JSON.stringify({ profile, skills, experience, education, projects }, null, 2) + '\n'
  );
  res.json({ ok: true });
});
app.listen(port, () => console.log(`Portfolio API listening at http://localhost:${port}`));
