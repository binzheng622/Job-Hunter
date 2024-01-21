import React from 'react';
import { useDrag } from 'react-dnd';

const Post = ({
  id,
  dateApplied,
  company,
  title,
  status,
  salary,
  link,
}: any) => {
  let colorArray: any = {
    Interested: 'yellow',
    Applied: 'lightpink',
    Interviewed: 'lightblue',
    FollowedUp: 'lavender',
    Accepted: 'lightgreen',
    Rejected: 'lightsalmon',
  };

  //make posts draggable
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'post',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  //delete job app from database
  function handleClick() {
    fetch(`/api/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    location.reload();
  }

  return (
    <div
      className='postBox'
      style={{ backgroundColor: colorArray[status] }}
      ref={drag}
    >
      <button className='postButton' onClick={handleClick}>
        X
      </button>
      <p>
        <b>Date: </b>
        {dateApplied.substring(0, 10)}
      </p>
      <p>
        <b>Company: </b>
        {company}
      </p>
      <p>
        <b>Title: </b>
        {title}
      </p>
      <p>
        <b>Status: </b>
        {status}
      </p>
      <p>
        <b>Salary: </b>
        {salary}
      </p>
      <p>
        <b>Link: </b>
        <a href={`http://${link}`}>Click on Link</a>
      </p>
    </div>
  );
};

export default Post;
