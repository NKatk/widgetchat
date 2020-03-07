import React from 'react';
import ButtonImg from './buttonImg';

const Input = ({ setActiveInput }) => {
  return (
    <form className="input" onClick={() => setActiveInput(true)}>
      <input
        readOnly
        className="text"
        type="text"
        placeholder="write a message"
      />
      <button className="button" type="submit">
        <ButtonImg />
      </button>
    </form>
  );
};

export default Input;
