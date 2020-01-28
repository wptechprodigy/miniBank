import { Router } from 'express';
import { registerUser } from '../controllers/register';
// import { iUser } from '../../types';

const router = Router();

router.get('/register', async (_req, res, _next) => {
  res.status(200).json({ message: 'You hit the register route' });
});

router.post('/register', async (req, res, _next) => {
  try {
    const newUser = await registerUser(req.body);

    if (!newUser) {
      res.status(500).json({ message: 'Registration was not successful' });

      return;
    }

    res.status(200).json({ newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
