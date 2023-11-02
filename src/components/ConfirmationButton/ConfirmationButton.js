import React, { useState } from 'react';
import './ConfirmationButton.css';

function ConfirmationButton() {

  const [buttonText, setButtonText] = useState('Click me');
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setButtonText('Confirmation button clicked');
    setCount(count + 1);
  };
    return (
      <div className='confirmation-button_wrapper'>
        <button 
        className='confirmation-button' 
        onClick={handleClick}>
          {buttonText}, Clicked {count} times
        </button>
      </div>
    );
}

export default ConfirmationButton;