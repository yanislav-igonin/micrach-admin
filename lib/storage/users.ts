
export interface User {
  username: string;
  password: string;
}

const superadmin: User = {
  username: process.env.SUPERADMIN_USERNAME!,
  password: process.env.SUPERADMIN_PASSWORD!,
};
const users = new Map<string, User>([
  [superadmin.username, superadmin],
]);

export const getUser = (username: string): User | null => {
  return users.get(username) || null;
};

export const comparePassword = (username: string, password: string): boolean => {
  const user = getUser(username);
  if (!user) {
    return false;
  }
  return user.password === password;
};
