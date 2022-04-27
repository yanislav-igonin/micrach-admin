export interface User {
  username: string;
  password: string;
}

const SUPERADMIN: User = {
  username: process.env.SUPERADMIN_USERNAME!,
  password: process.env.SUPERADMIN_PASSWORD!,
};
const users = new Map<string, User>([
  [process.env.SUPERADMIN_USERNAME!, SUPERADMIN],
]);

export const getUser = (username: string): User | null => {
  return users.get(username) || null;
}

export const comparePassword = (username: string, password: string): boolean => {
  const user = getUser(username);
  if (!user) {
    return false;
  }
  return user.password === password;
}
