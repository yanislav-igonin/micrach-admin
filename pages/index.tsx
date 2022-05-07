import { withSessionSsr } from '@session';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage, Redirect } from 'next';

interface Props {
  redirect: string
}

export const getServerSideProps: GetServerSideProps<Redirect> =
  withSessionSsr((ctx: GetServerSidePropsContext) => {
    const { user } = ctx.req.session;
    if (!user) return { redirect: { destination: '/auth/login', permanent: false } };
    return { redirect: { destination: '/dashboard', permanent: false } };
  });

const Home: NextPage<Props> = () => {
  return (<></>);
};

export default Home;
