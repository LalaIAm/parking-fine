import React from 'react';

const TicketForm = ({ handleInputData, nextStep }) => {
  return (
    <div className='payment-form'>
      <h5>Please input your ticket number</h5>
      <div>
        <input
          className='form-control ticket-input'
          placeholder='Ticket Number'
          required
          name='ticketNo'
          id='ticketNo'
          onChange={handleInputData}
        />
          </div>
          <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default TicketForm;
