import Router from 'next/router';
import { Button, Header as MantineHeader } from '@mantine/core';
import { logout as logoutApi } from 'lib/api/auth/logout';

const logout = async () => {
  await logoutApi();
  await Router.push('/auth/login');
};

export const Header = () => (
  <MantineHeader height={60} p="xs">
    <Button onClick={logout}>Logout</Button>
  </MantineHeader>
);
