import React, { useState } from 'react';
import PaymentForm from './CheckoutForm';
import TicketForm from './TicketForm';

const PaymentPage = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    ticketNumber: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  return (
    <div className='main page'>
      <h2 className='pt-5 text-center'>Ez Pay</h2>
      <div className='container p-5'>
        {step === 1 && (
          <TicketForm handleInputData={handleInputData} nextStep={nextStep} />
        )}
        {step === 2 && (
          <PaymentForm ticket={formData} />
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
