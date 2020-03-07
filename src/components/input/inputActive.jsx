import React, { useState } from 'react';
import ButtonImg from './buttonImg';

const Input = ({ saveMsg, choiceChat }) => {
  const [msg, setMsg] = useState('');

  const save = e => {
    e.preventDefault();
    setMsg('');
    saveMsg(msg, true, choiceChat);
  };

  return (
    <form onSubmit={save} className="input_active">
      <textarea
        onChange={e => setMsg(e.target.value)}
        autoFocus
        className="text"
        type="text"
        value={msg}
      />
      <button className="button" type="submit">
        <ButtonImg color="#003EDF" />
      </button>
    </form>
  );
};

export default Input;
