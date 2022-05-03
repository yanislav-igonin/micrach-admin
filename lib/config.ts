const TWO_HOURS = 1000 * 60 * 60 * 2;

export enum Environment {
  Development = 'development',
  Production = 'production',
};

const required = (name: string, value: string | undefined): string => {
  if (!value) throw new Error(`${name} is required`);
  return value;
};

const {
  NODE_ENV,
  SUPERADMIN_USERNAME,
  SUPERADMIN_PASSWORD,
  COOKIE_ENCRYPT_KEY,
  DATABASE_URL,
} = process.env;

export const config = {
  app: {
    env: NODE_ENV || Environment.Production,
  },
  superadmin: {
    username: required('SUPERADMIN_USERNAME', SUPERADMIN_USERNAME),
    password: required('SUPERADMIN_PASSWORD', SUPERADMIN_PASSWORD),
  },
  cookie: {
    encryptKey: required('COOKIE_ENCRYPT_KEY', COOKIE_ENCRYPT_KEY),
    ttl: TWO_HOURS,
  },
  db: {
    url: required('DATABASE_URL', DATABASE_URL),
  },
};
