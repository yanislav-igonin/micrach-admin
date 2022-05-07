import Link from 'next/link';
import { withSessionSsr } from '@session';
import db from '@db';
import type { PostWithStringDates } from '@utils';
import { mapDateToString, LOGIN_PAGE, THREAD_PAGE } from '@utils';
import { Layout } from '@components/Layout';

interface Props {
  threads: PostWithStringDates[]
}

export const getServerSideProps = withSessionSsr(async (ctx) => {
  const { user } = ctx.req.session;
  if (!user) return { redirect: { destination: LOGIN_PAGE, permanent: false } };

  const res = await db.posts.findMany({
    where: { is_parent: true },
    orderBy: { updated_at: 'desc' },
    take: 10,
    skip: 0,
  });
  const withStringDates = mapDateToString(res);
  return { props: { threads: withStringDates } };
});

export const Dashboard = (props: Props) => {
  const { threads } = props;
  return (
    <Layout>
      <div>
        {threads.map((thread) => (
          <div key={thread.id}>
            <Link href={THREAD_PAGE(thread.id)}>{thread.title}</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
