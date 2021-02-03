/* eslint-disable import/prefer-default-export */
import axios from './axios';

export const signIn = async (user) => {
  const res = await axios.post('users', user);
  return res;
};
