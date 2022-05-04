import Router from 'next/router';
import { Button, Header as MantineHeader } from '@mantine/core';
import { logout as logoutApi } from 'lib/api/auth/logout';
import { showNotification } from '@mantine/notifications';
import { AxiosError } from 'axios';

const logout = async () => {
  try {
    await logoutApi();
    await Router.push('/auth/login');
  } catch (err) {
    if (err instanceof AxiosError) {
      showNotification({ color: 'red', message: err!.response!.data.error.message });
    }
  }
};

export const Header = () => (
  <MantineHeader height={60} p="xs">
    <Button onClick={logout}>Logout</Button>
  </MantineHeader>
);
