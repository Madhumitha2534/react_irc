import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  <h1>REGISTRATION FORM</h1>
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // Validate inputs and handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h4><i>REGISTER TO GIFTOO</i></h4>
        First Name (Compulsory):
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          />
      </label>

      <label>
        Last Name (Optional):
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      <label>
        Mobile Number:
        <input
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          pattern="[0-9]{10}"
          required
        />
      </label>

      <label>
        Address:
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>

      <label>
        Pincode:
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          pattern="[0-9]{6}"
          required
        />
      </label>

      <label>
        Payment Method:
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="card">Credit/Debit/ATM Card</option>
          <option value="netbanking">Net Banking</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </label>

      <label className="checkbox-label">
  <input
    type="checkbox"
    checked={termsChecked}
    onChange={() => setTermsChecked(!termsChecked)}
    required
    />
</label>

    I accept the terms and conditions
      <button type="submit">Submit</button>
    </form>
  );
  
};

export default RegistrationForm;
