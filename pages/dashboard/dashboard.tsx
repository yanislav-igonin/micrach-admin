import { withSessionSsr } from 'lib/session';
import db from 'lib/prisma';
import type { PostWithStringDates } from 'lib/utils';
import { mapDateToString } from 'lib/utils';

interface Props {
  threads: PostWithStringDates[]
}

export const getServerSideProps = withSessionSsr(async (ctx) => {
  const { user } = ctx.req.session;
  if (!user) return { redirect: { destination: '/auth/login', permanent: false } };

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
    <main>
      вилкой чисти раз раз раз
      <div>
        {threads.map((thread) => (<p key={thread.id}>{thread.title}</p>))}
      </div>
    </main>
  );
};
