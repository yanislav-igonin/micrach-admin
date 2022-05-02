import { withSessionSsr } from 'lib/session';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage, Redirect } from 'next';
// import db from '../lib/prisma';
// import type { PostWithStringDates } from '../utils';
// import { mapDateToString } from '../utils';

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
  return (
    <main>
    </main>
  );
};

export default Home;
