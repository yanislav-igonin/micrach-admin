import { TextInput } from '@mantine/core';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage, NextPageContext, Redirect } from 'next'
import Head from 'next/head'
import db from '../lib/prisma';
import type {PostWithStringDates} from '../utils';
import {mapDateToString} from '../utils';

interface Props {
  // threads: PostWithStringDates[]
  redirect: string
}

export const getServerSideProps: GetServerSideProps<Redirect> = async (ctx: GetServerSidePropsContext) => {
  return {
    redirect: {
      destination: '/auth/login',
      permanent: false,
    }
  }; 
  // const res = await db.posts.findMany({
  //   where: { is_parent: true },
  //   orderBy: { updated_at: 'desc' },
  //   take: 10,
  //   skip: 0,
  // });
  // const withStringDates = mapDateToString(res)
  // return { props: { threads: withStringDates } }
}

const Home: NextPage<Props> = (props) => {
  // const { threads } = props;
  return (
    <div>
      <Head>
        <title>Micrach Admin Panel</title>
        <meta name="description" content="Micrach Admin Panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
