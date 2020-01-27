import { Router } from 'express';

const router = Router();

router.get('/register', function(_req, res, _next) {
  res.status(200).json({ message: 'You hit the register route' });
});

export default router;
