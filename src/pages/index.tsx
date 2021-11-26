import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import JobList from '../components/JobList/JobList';
import Layout from '../components/Layouts/Main';
import { UserContextProvider } from '../contexts/UserContext';
import * as Matches from '../api/models/matches';
import * as User from '../api/models/user';
import { acceptJob, fetchJobMatches, fetchUser, rejectJob } from '../api';

interface IHomeProps {
  initialData: {
    jobs: Matches.IJob;
    user: User.IUser;
  };
}

export const USER_ID = '7f90df6e-b832-44e2-b624-3143d428001f';

export default function Home({ initialData }: IHomeProps) {
  const { data: jobList } = useSWR('jobs', () => fetchJobMatches(USER_ID), {
    fallbackData: initialData.jobs,
  });

  const { data: user } = useSWR('user', () => fetchUser(USER_ID), {
    fallbackData: initialData.user,
  });

  return (
    <UserContextProvider user={user}>
      <div className="bg-gray-200">
        <Head>
          <title>swipejobs | Gig work with W-2 benefits</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <JobList jobList={jobList}></JobList>
        </Layout>
      </div>
    </UserContextProvider>
  );
}

export async function getServerSideProps() {
  const jobs = await fetchJobMatches(USER_ID);
  const user = await fetchUser(USER_ID);
  return {
    props: {
      initialData: {
        jobs,
        user,
      },
    },
  };
}
