import { User, getUser } from "./users";

export interface Session {
  token: string;
  lastAccess: Date;
  user: User,
}

const sessions = new Map<string, Session>();

export const getSession = (token: string): Session | null => {
  const session = sessions.get(token);
  if (session) {
    session.lastAccess = new Date();
  }
  return session || null;
}

export const createSession = (username: string): Session => {
  const user = getUser(username);
  if (!user) {
    throw new Error("User not found");
  }
  const token = Math.random().toString(36).substring(2);
  const session = {
    token,
    user,
    lastAccess: new Date(),
  };
  sessions.set(token, session);
  return session;
}

export const deleteSession = (username: string): void => {
  sessions.delete(username);
}

export const refreshSession = (username: string): Session | null => {
  const session = getSession(username);
  if (session) {
    return createSession(username);
  }
  return null;
}
