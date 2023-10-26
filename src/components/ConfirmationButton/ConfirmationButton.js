import React, { useState } from 'react';
import './ConfirmationButton.css';

function ConfirmationButton() {

  const [buttonText, setButtonText] = useState('Click me');

  const handleClick = () => {
    setButtonText('Confirmation button clicked');
  };
    return (
      <div className='confirmation-button_wrapper'>
        <button className='confirmation-button' onClick={handleClick}>{buttonText}</button>
      </div>
    );
}

export default ConfirmationButton;