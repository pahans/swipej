import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { IJob } from '../../api/models/matches';
import { UserContextProvider } from '../../contexts/UserContext';
import Job from './Job';


const mockUser = {
  address: {
    formattedAddress: '',
    zoneId: '',
  },
  email: '',
  firstName: '',
  lastName: '',
  maxJobDistance: 0,
  phoneNumber: '',
  workerId: 'test-worker-id',
};

const renderComponent = () => {
  render(
    <UserContextProvider user={mockUser}>
      <Job job={job} />
    </UserContextProvider>,
  );
};
const job: IJob = {
  jobId: '5775d8e18a488e6c5bb08c13',
  jobTitle: {
    name: 'Driver',
    imageUrl: 'https://imgs.swipejobs.com/js/job-category/driver-service-3.jpg',
  },
  company: {
    name: 'C.D. Barnes and Associates',
    address: {
      formattedAddress: '123 Main Street, Chicago, IL 60654',
      zoneId: 'America/Chicago',
    },
    reportTo: {
      name: 'Steve Rogers',
    },
  },
  wagePerHourInCents: 1081.7,
  milesToTravel: 11.666,

  shifts: [
    {
      startDate: '2019-09-04T21:00:00Z',
      endDate: '2019-09-05T05:00:00Z',
    },
  ],
  branch: 'Chicago',
  branchPhoneNumber: '2531233311',
  requirements: ['Safety Vest', 'Hart Hat'],
};
describe('Job', () => {
  beforeEach(async () => {
    // @ts-ignore
    fetch.resetMocks();
    act(() => {
      renderComponent();
    });
  });
  it('Renders correct date format', async () => {
    expect(await screen.findByText('Thu, Sep 5, 2:30 AM - 10:30 AM PST')).toBeInTheDocument();
  });
  it('Can accept job', async () => {
    await act(async ()=>{
      (await screen.findByText('I\'ll Take it')).click();
    });
    expect(fetch).toBeCalledWith("https://test.swipejobs.com/api/worker/test-worker-id/job/5775d8e18a488e6c5bb08c13/accept")
  });
  it('Can reject Job', async () => {
    await act(async ()=>{
      (await screen.findByText('No Thanks')).click();
    });
    expect(fetch).toBeCalledWith("https://test.swipejobs.com/api/worker/test-worker-id/job/5775d8e18a488e6c5bb08c13/reject")
  });
});
