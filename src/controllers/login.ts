import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import { iUser } from "../../types";
import Users from '../models/Users';

export async function loginUser(username: string, password: string) {
  const foundUser = await Users.findOne({ username });

  if (!foundUser) {
    throw Error('Ensure login details are correct.');
  }

  const isPassword = await bcrypt.compare(password, foundUser.password);

  if (!isPassword) {
    throw new Error('Either username or password is incorrect.');
  }

  const token = jwt.sign(
    {
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email,
    },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: '1h' },
  );

  return {
    status: 200,
    message: 'Login Succesful',
    payload: foundUser,
    token,
  };
}
