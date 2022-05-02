import { TextInput, Button } from "@mantine/core";
import { useForm } from '@mantine/form';
import Router  from "next/router";
import { login as loginApi, LoginRequest } from 'lib/api/auth/login';

const login = async (data: LoginRequest) => {
  try {
    await loginApi(data);
    await Router.push('/dashboard');
  } catch (err) {
    console.error(err);
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
