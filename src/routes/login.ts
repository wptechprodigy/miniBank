import { Router } from 'express';
import { loginUser } from '../controllers/login';

const router = Router();

router.post('/login', async (req, res, _next) => {
  const { username, password } = req.body;

  if (username.trim() === '' || password.trim() === '') {
    res.status(400).json({ message: 'You need to provide all details' });

    return;
  }

  try {
    const userDetails = await loginUser(username, password);

    const { status, message, payload, token } = userDetails;

    res.status(status).json({
      message,
      payload,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
