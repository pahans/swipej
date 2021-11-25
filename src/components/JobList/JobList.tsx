import React from 'react';
import Image from 'next/image';

interface IJobList {
  jobList: any;
}

const JobList = ({ jobList }: IJobList): JSX.Element => {
  return jobList.map((job: any) => {
    return (
      <div key={job.jobId} className="py-2">
        <div className="mx-4 space-y-2">
          <div className="relative w-full h-60">
            <Image src={job.jobTitle.imageUrl} layout="fill" objectFit="cover" />
          </div>

          <div className="px-4">
            <h3 className="font-bold">{job.jobTitle.name}</h3>
            <p className="font-semibold text-sm">{job.company.name}</p>
          </div>

          <div className=" flex justify-between py-2 px-4 bg-teal-500 ">
            <div className="text-left">
              <div className="text-xs font-bold">Distance</div>
              <div className="text-2xl font-semibold text-white">
                {job.milesToTravel.toFixed(1)} miles
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs font-bold">Hourly Rate</div>
              <div className="text-2xl font-bold text-white">
                <sup>$</sup> {(job.wagePerHourInCents/100).toFixed(2)}
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  });
};

export default JobList;
