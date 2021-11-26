import { faCalendar, faMapMarkerAlt, faTools, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useCallback, useReducer, useState } from 'react';
import { IJob } from '../../api/models/matches';
import { formatPhoneNumber } from '../../utils';
import Image from 'next/image';
import Button from '../Button';
import Card from './Card';
import InfoBox from './InfoBox';
import ListItem from './ListItem';
import { acceptJob, rejectJob } from '../../api';
import { useUserContext } from '../../contexts/UserContext';

interface IJobProps {
  job: IJob;
}

interface IJobState {
  success: string;
  error: string;
  isLoading: boolean;
}

const Job = ({ job }: IJobProps): JSX.Element => {
  const user = useUserContext();
  const initialState = { success: '', error: '', isLoading: false };
  function reducer(
    state: IJobState,
    action: { type: 'success' | 'error' | 'loading'; message: string },
  ) {
    switch (action.type) {
      case 'success':
        return {
          ...state,
          success: action.message || '',
          error: '',
          isLoading: false,
        };
      case 'error':
        return {
          ...state,
          success: '',
          error: action.message || '',
          isLoading: false,
        };
      case 'loading':
        return {
          ...state,
          success: '',
          error: '',
          isLoading: true,
        };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const { error, success, isLoading } = state;

  const handleAccept = useCallback(
    (jobId: string) => {
      dispatch({ type: 'loading', message: '' });
      acceptJob(user.workerId, jobId)
        .then((res: { success: boolean; message: string }) => {
          if (res.success) {
            dispatch({ type: 'success', message: 'Job Accepted' });
          } else {
            dispatch({ type: 'error', message: res.message });
          }
        })
        .catch((e) => {
          dispatch({ type: 'error', message: e.message });
        });
    },
    [user],
  );

  const handleReject = useCallback(
    (jobId: string) => {
      dispatch({ type: 'loading', message: '' });
      rejectJob(user.workerId, jobId)
        .then((res: { success: boolean; message: string }) => {
          if (res.success) {
            dispatch({ type: 'success', message: 'Job Rejected' });
          } else {
            dispatch({ type: 'error', message: res.message });
          }
        })
        .catch((e) => {
          dispatch({ type: 'error', message: e.message });
        });
    },
    [user],
  );
  return (
    <div className=" bg-gray-50">
      <div className="space-y-2">
        <div className="relative w-full h-60">
          <Image src={job.jobTitle.imageUrl} layout="fill" objectFit="cover" alt={job.jobTitle.name} />
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
                {job.shifts.map((shift) => {
                  const startDate = new Date(shift.startDate).toLocaleString('en-US', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  });
                  const endDate = new Date(shift.endDate).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  });
                  const formatedShiftTime = `${startDate} - ${endDate} PST`;
                  return (
                    <ListItem.Text key={shift.startDate + shift.endDate}>
                      {formatedShiftTime}
                    </ListItem.Text>
                  );
                })}
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
                    <ListItem.Text key={requirement}>- {requirement}</ListItem.Text>
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
                    {job.company.reportTo.name}{' '}
                    {job.company.reportTo.phone && formatPhoneNumber(job.company.reportTo.phone)}
                  </ListItem.Text>
                </ul>
              </div>
            </ListItem>
          )}
          <div className="flex py-4 px-4">
            {<div className={`${error ? 'text-red-400' : 'text-emerald'}`}>{error || success}</div>}
            {!isLoading && !error && !success && (
              <>
                <Button
                  onClick={() => {
                    handleReject(job.jobId);
                  }}
                  className="flex-1"
                  type="outline"
                >
                  No Thanks
                </Button>
                <Button
                  onClick={() => {
                    handleAccept(job.jobId);
                  }}
                  className="flex-1"
                  type="regular"
                >
                  I&apos;ll Take it
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
