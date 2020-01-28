import { Router } from 'express';

const router = Router();

router.get('/transactions/:id', function(_req, res, _next) {
  res.status(200).json({ message: 'You hit the get transaction route' });
});

router.post('/transactions', function(_req, res, _next) {
  res.status(200).json({ message: 'You intended to make a transaction' });
});

export default router;
