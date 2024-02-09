import React from 'react';
import WhiteBoard from '../assets/whiteboard.png';
import DisplayNotes from '../components/DisplayNotes';

const JobContainer = () => {
  const statusArray: string[] = [
    'Interested',
    'Applied',
    'Interviewed',
    'FollowedUp',
    'Accepted',
    'Rejected',
  ];

  //create the job status columns
  let columnArray: JSX.Element[] = [];
  statusArray.forEach((ele) => {
    columnArray.push(<DisplayNotes key={ele} status={ele} />);
  });

  return (
    <div
      className='jobContainer'
      style={{ backgroundImage: `url(${WhiteBoard})` }}
    >
      {columnArray}
    </div>
  );
};

export default JobContainer;
