import React from 'react';
import WhiteBoard from '../assets/whiteboard.png';
import DisplayNotes from '../components/DisplayNotes.jsx';

const JobContainer = () => {
  const statusArray = [
    'Interested',
    'Applied',
    'Interviewed',
    'FollowedUp',
    'Accepted',
    'Rejected',
  ];

  //create the job status columns
  let columnArray = [];
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
