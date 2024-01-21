import React from 'react';
import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import Post from './Post';
import { jobAppType } from '../../types';

const DisplayNotes = ({ status }: { status: string }) => {
  const jobArray: jobAppType[] = useSelector(
    (state: any) => state.notes[status]
  );

  //make columns droppable
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'post',
    drop: (item: { id: string }) => changeStatus(item.id),
    collect: (montior) => ({
      isOver: !!montior.isOver(),
    }),
  }));

  //update status of job app
  const changeStatus = (id: string) => {
    fetch(`/api/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    location.reload();
  };

  //create posts in each column
  const postArray: JSX.Element[] = [];
  jobArray.forEach((ele: any) => {
    postArray.push(
      <Post
        key={ele._id}
        id={ele._id}
        dateApplied={ele.dateApplied}
        company={ele.company}
        title={ele.title}
        status={ele.status}
        salary={ele.salary}
        link={ele.link}
      />
    );
  });

  return (
    <div className='statusColumn' ref={drop}>
      <label id='status'>{status}</label>
      <div className='postContainer'>{postArray}</div>
    </div>
  );
};

export default DisplayNotes;
