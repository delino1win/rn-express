import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';

dotenv.config();
const pgSql = neon(process.env.DATABASE_URL);

export default pgSql