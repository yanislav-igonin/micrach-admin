import { TextInput, Button, Center, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import Router  from 'next/router';
import { showNotification } from '@mantine/notifications';
import { login as loginApi, LoginRequest } from 'lib/api/auth/login';
import { AxiosError } from 'axios';
import classes from './login.module.css';

const login = async (data: LoginRequest) => {
  try {
    await loginApi(data);
    await Router.push('/dashboard');
  } catch (err) {
    if (err instanceof AxiosError) {
      showNotification({ color: 'red', message: err!.response!.data.error.message });
    }
  }
};

export const Login = () => {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });

  return (
    <main>
      <Center className={classes['login-page-container']}>
        <form className={classes['login-form-container']} onSubmit={form.onSubmit((values) => login(values))}>
          <TextInput mb='sm' placeholder='Login' {...form.getInputProps('username')} />
          <TextInput mb='sm' placeholder='Password' type='password' {...form.getInputProps('password')} />
          <Button type='submit'>Login</Button>
        </form>
      </Center>
    </main>
  );
};
