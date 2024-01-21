import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderContainer from './HeaderContainer';
import JobContainer from './JobContainer';
import { syncData } from '../reducers/noteReducer';
import { syncDataType } from '../../types';

const MainContainer = () => {
  const dispatch = useDispatch();

  //fetch lastest date from database
  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data: syncDataType) => {
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
