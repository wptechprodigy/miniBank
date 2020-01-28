import { iUser } from '../../types';

export function validateRegisterInput(userDetails: iUser) {
  const { firstName, lastName, email, password, confirmPassword } = userDetails;

  if (firstName.trim() === '' || lastName.trim() === '') {
    throw new Error('First and last name must not be empty.');
  }

  if (email.trim() === '') {
    throw new Error('Email must not be empty.');
  }

  const regEx = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.match(regEx)) {
    throw new Error('Email must be a valid email.');
  }

  if (password === '') {
    throw new Error('Password cannot be empty.');
  }

  if (password !== confirmPassword) {
    throw new Error('Passwords must match.');
  }

  return true;
}
