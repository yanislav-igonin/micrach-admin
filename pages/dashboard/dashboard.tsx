import { withSessionSsr } from 'lib/session';
import db from 'lib/db/prisma';
import type { PostWithStringDates } from 'lib/utils';
import { mapDateToString } from 'lib/utils';
import { Layout } from 'lib/components/Layout';
import Link from 'next/link';
import { LOGIN_PAGE, THREAD_PAGE } from '@utils/pages';

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
          <Link href={THREAD_PAGE(thread.id)} key={thread.id}>{thread.title}</Link>
        ))}
      </div>
    </Layout>
  );
};
