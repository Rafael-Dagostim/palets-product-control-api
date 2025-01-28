import { genSalt, hash } from 'bcrypt';

export async function hashPassword(
  password: string,
  pepper: string,
  salt?: string,
): Promise<string> {
  if (!salt) salt = await genSalt(14);
  const saltAndPeper = `${salt}${pepper}`;
  return hash(password, saltAndPeper);
}
