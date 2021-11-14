import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV, PORT } = process.env;

export default {
  NODE_ENV,
  PORT,
};
