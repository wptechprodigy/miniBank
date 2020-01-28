import { iUser } from '../../types';
import Users from '../models/Users';

export async function registerUser(userDetails: iUser) {
  // Does user already exist?
  const userExists = await Users.findOne({
    email: userDetails.email,
  });

  if (userExists) {
    throw new Error(`Email has already been taken.`);
  }

  const newUser = new Users(userDetails);

  return newUser.save();
}
