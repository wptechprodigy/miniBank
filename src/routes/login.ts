import { Router } from 'express';

const router = Router();

router.get('/login', function(_req, res, _next) {
  res.status(200).json({ message: 'You hit the login route' });
});

router.post('/login', function(_req, res, _next) {
  res.status(200).json({ message: 'You intended to login' });
});

export default router;
