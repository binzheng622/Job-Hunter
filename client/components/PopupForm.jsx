import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dateApplied, setdateApplied] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [status, setStatus] = useState('');
  const [salary, setSalary] = useState('');
  const [link, setLink] = useState('');

  function handleClick() {
    let formObj = {
      dateApplied: dateApplied,
      company: company,
      title: jobTitle,
      status: status,
      salary: salary,
      link: link,
    };

    fetch('/data', {
      method: 'POST',
      body: JSON.stringify(formObj),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    handleClose();
    location.reload();
  }

  return (
    <>
      <Button variant='primary' className='formButton' onClick={handleShow}>
        +
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className='formInput'
            onSubmit={(e) => {
              e.preventDefault();
              setdateApplied('');
              setCompany('');
              setJobTitle('');
              setStatus('');
              setSalary('');
              setLink('');
            }}
          >
            <label>
              {' '}
              Date Applied:
              <input
                id='dateApplied'
                type='date'
                value={dateApplied}
                onChange={(e) => {
                  setdateApplied(e.target.value);
                }}
              />
            </label>
            <label>
              {' '}
              Company:
              <input
                id='company'
                placeholder='Codesmith'
                type='string'
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </label>
            <label>
              {' '}
              Job Title:
              <input
                id='jobTitle'
                placeholder='Software Engineer'
                type='string'
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }}
              />
            </label>
            <label>
              {' '}
              Status:
              <select
                id='status'
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value='blank'>Select Status</option>
                <option value='Interested'>Interested</option>
                <option value='Applied'>Applied</option>
                <option value='Interviewed'>Interviewed</option>
                <option value='FollowedUp'>Followed Up</option>
                <option value='Accepted'>Accepted</option>
                <option value='Rejected'>Rejected</option>
              </select>
            </label>
            <label>
              {' '}
              Salary: $
              <input
                id='salary'
                placeholder='100,000'
                type='number'
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </label>
            <label>
              {' '}
              Link:
              <input
                id='link'
                placeholder='www.codesmith.io'
                type='string'
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Don't Save
          </Button>
          <Button variant='primary' onClick={handleClick}>
            Let's Track It!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupForm;
