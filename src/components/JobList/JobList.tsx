import React from 'react';
import * as Matches from '../../api/models/matches';
import Job from './Job';

interface IJobList {
  jobList: Matches.IJob[];
}

const JobList = ({ jobList }: IJobList): JSX.Element => {
  return (
    <div className="container mx-auto md:px-4 max-w-screen-md divide-gray-200 divide-y">
      {jobList.map((job) => (
        <Job job={job} key={job.jobId} />
      ))}
    </div>
  );
};

export default JobList;
