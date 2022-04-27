import { TextInput } from "@mantine/core";



const Login = () => {
  return (
    <main>
      <form>
        <TextInput placeholder='Login' />
        <TextInput placeholder='Password' type='password' />
      </form>
    </main>
  )
}

export default Login;
