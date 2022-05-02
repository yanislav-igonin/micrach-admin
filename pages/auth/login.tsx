import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import Router  from 'next/router';
import { showNotification } from '@mantine/notifications';
import { login as loginApi, LoginRequest } from 'lib/api/auth/login';
import { AxiosError } from 'axios';

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

const Login = () => {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });

  return (
    <main>
      <form onSubmit={form.onSubmit((values) => login(values))}>
        <TextInput placeholder='Login' {...form.getInputProps('username')} />
        <TextInput placeholder='Password' type='password' {...form.getInputProps('password')} />
        <Button type='submit'>Login</Button>
      </form>
    </main>
  );
};

export default Login;
