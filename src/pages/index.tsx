import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import { API_URL, ENDPOINT_MATCHES, USER_ID } from '../constants';
import Layout from './components/Layout';

const endpoint = `${API_URL}/${USER_ID}/${ENDPOINT_MATCHES}`;

const fetchMatches = () => fetch(endpoint).then((res) => res.json());

interface IHomeProps {
  initialData: any;
}

export default function Home({ initialData }: IHomeProps) {
  const { data: jobList } = useSWR(endpoint, fetchMatches, { fallbackData: initialData });
  return (
    <div>
      <Head>
        <title>swipejobs | Gig work with W-2 benefits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="xl:container xl:mx-auto px-4">
          <h1 className="text-6xl font-bold">Job Matches</h1>
          {jobList.map((job: any) => {
            return (
              <div key={job.jobId}>
                <h3>{job.jobTitle.name}</h3>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetchMatches();
  return {
    props: {
      initialData: res,
    },
  };
}
