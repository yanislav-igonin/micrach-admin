import { TextInput, Button } from "@mantine/core";
import { useForm } from '@mantine/form';
import { NextRouter, useRouter } from "next/router";

interface LoginRequest {
  username: string;
  password: string;
}

const login = async (data: LoginRequest, router: NextRouter) => {

  // await router.push(res.url!, undefined, { shallow: true });
};

const Login = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });

  return (
    <main>
      <form onSubmit={form.onSubmit((values) => login(values, router))}>
        <TextInput placeholder='Login' {...form.getInputProps('username')} />
        <TextInput placeholder='Password' type='password' {...form.getInputProps('password')} />
        <Button type='submit'>Login</Button>
      </form>
    </main> 
  );
};

export default Login;
