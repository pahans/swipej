import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import { API_URL, ENDPOINT_JOB_MATCHES, ENDPOINT_USER, USER_ID } from '../constants';
import JobList from '../components/JobList/JobList';
import Layout from '../components/Layouts/Main';
import { UserContext, UserContextProvider } from '../contexts/UserContext';
import * as Matches from '../models/matches';

const jobsEndpoint = `${API_URL}/${USER_ID}/${ENDPOINT_JOB_MATCHES}`;
const userEndpoint = `${API_URL}/${USER_ID}/${ENDPOINT_USER}`;

const fetchJobMatches = () => fetch(jobsEndpoint).then((res) => res.json());
const fetchUser = () => fetch(userEndpoint).then((res) => res.json());

interface IHomeProps {
  initialData: {
    jobs: Matches.Job;
    user: UserContext;
  };
}

export default function Home({ initialData }: IHomeProps) {
  const { data: jobList } = useSWR(jobsEndpoint, fetchJobMatches, {
    fallbackData: initialData.jobs,
  });
  const { data: user } = useSWR(userEndpoint, fetchUser, { fallbackData: initialData.user });

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
  const jobs = await fetchJobMatches();
  const user = await fetchUser();
  return {
    props: {
      initialData: {
        jobs,
        user,
      },
    },
  };
}
