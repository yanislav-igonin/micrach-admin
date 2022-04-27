import { TextInput, Button } from "@mantine/core";
import { useForm } from '@mantine/form';
import { login } from "../../api/auth/login";

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
