import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderContainer from './HeaderContainer.jsx';
import JobContainer from './JobContainer.jsx';
import { syncData } from '../reducers/noteReducer.js';

const MainContainer = () => {
  const dispatch = useDispatch();

  //fetch lastest date from database
  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        dispatch(syncData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className='mainContainer'>
      <HeaderContainer />
      <JobContainer />
    </div>
  );
};

export default MainContainer;
