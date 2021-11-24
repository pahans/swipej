import React from 'react';

interface IJobList {
  jobList: any;
}

const JobList = ({ jobList }: IJobList): JSX.Element => {
  return jobList.map((job: any) => {
    return (
      <div key={job.jobId}>
        <h3>{job.jobTitle.name}</h3>
      </div>
    );
  });
};

export default JobList;
