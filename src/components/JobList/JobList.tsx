import React from 'react';
import Image from 'next/image';
import { faCalendar, faMapMarkerAlt, faTools, faUser } from '@fortawesome/free-solid-svg-icons';
import InfoBox from './InfoBox';
import Card from './Card';
import ListItem from './ListItem';
import * as Matches from '../../models/matches';

interface IJobList {
  jobList: Matches.IJob[];
}

const JobList = ({ jobList }: IJobList): JSX.Element => {
  return (
    <div className="container mx-auto md:px-4 max-w-screen-md divide-gray-200 divide-y">
      {jobList.map((job) => {
        return (
          <div key={job.jobId} className=" bg-gray-50">
            <div className="space-y-2">
              <div className="relative w-full h-60">
                <Image src={job.jobTitle.imageUrl} layout="fill" objectFit="cover" />
              </div>

              <div className="px-4">
                <h3 className="font-bold truncate">{job.jobTitle.name}</h3>
                <h4 className="font-semibold text-sm truncate">{job.company.name}</h4>
              </div>

              <Card color="bg-emerald">
                <InfoBox title="Distance" text={`${job.milesToTravel.toFixed(1)} miles`} />
                <InfoBox
                  title="Hourly Rate"
                  align="right"
                  text={
                    <>
                      <sup>$</sup> {(job.wagePerHourInCents / 100).toFixed(2)}
                    </>
                  }
                />
              </Card>

              <div className="divide-y">
                <ListItem>
                  <ListItem.Icon icon={faCalendar}></ListItem.Icon>
                  <div>
                    <ListItem.Title>Shift Dates</ListItem.Title>
                    <ul>
                      {job.shifts.map((shift) => (
                        <ListItem.Text>{shift.startDate}</ListItem.Text>
                      ))}
                    </ul>
                  </div>
                </ListItem>

                <ListItem>
                  <ListItem.Icon icon={faMapMarkerAlt}></ListItem.Icon>
                  <div>
                    <ListItem.Title>Location</ListItem.Title>
                    <ul>
                      <ListItem.Text>{job.company.address.formattedAddress}</ListItem.Text>
                      <ListItem.SubText>
                        {job.milesToTravel.toFixed(1)} miles from your job search location
                      </ListItem.SubText>
                    </ul>
                  </div>
                </ListItem>

                {job.requirements && (
                  <ListItem>
                    <ListItem.Icon icon={faTools}></ListItem.Icon>
                    <div>
                      <ListItem.Title>Requirements</ListItem.Title>
                      <ul>
                        {job.requirements.map((requirement) => (
                          <ListItem.Text>- {requirement}</ListItem.Text>
                        ))}
                      </ul>
                    </div>
                  </ListItem>
                )}

                {job.company.reportTo && (
                  <ListItem>
                    <ListItem.Icon icon={faUser}></ListItem.Icon>
                    <div>
                      <ListItem.Title>Report To</ListItem.Title>
                      <ul>
                        <ListItem.Text>
                          {job.company.reportTo.name} {job.company.reportTo.phone}
                        </ListItem.Text>
                      </ul>
                    </div>
                  </ListItem>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobList;
