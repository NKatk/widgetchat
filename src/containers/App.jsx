import React, { useState } from 'react';
import useStoreon from 'storeon/react';

import CloseChat from '../components/closeChat';
import Header from '../components/header';
import ListChat from '../components/body/listChat';
import Chat from '../components/body/chat';
import Input from '../components/input/input';
import InputActive from '../components/input/inputActive';
import Label from '../components/label';

const App = () => {
  const [chatStatus, setChatStatus] = useState(false);
  const [choiceChat, setChoiceChat] = useState(null);
  const [activeInput, setActiveInput] = useState(false);
  const { dispatch, dialogs } = useStoreon('dialogs');

  const answer = index => {
    const i = index || index === 0 ? index : choiceChat;
    setTimeout(() => {
      saveMsg('ok', false, i);
      setTimeout(() => {
        saveMsg('i see', false, i);
      }, 1500);
    }, 1500);
  };

  const saveMsg = (data, isCustomer, index) => {
    if (index || index === 0) {
      dispatch('addMsg', {
        index: index,
        data: {
          isCustomer: isCustomer,
          msg: data,
          date: new Date(),
        },
      });
      if (isCustomer) answer();
      return;
    }
    dispatch('addDialog', {
      nameSupport: 'John Doe',
      srcImg:
        'https://image.freepik.com/free-vector/yellow-robot-mascot-design_35422-44.jpg',
      msgs: [
        {
          isCustomer: isCustomer,
          msg: data,
          date: new Date(),
        },
      ],
    });
    setChoiceChat(dialogs.length);
    if (isCustomer) answer(dialogs.length);
  };

  if (!chatStatus) return <CloseChat setChatStatus={setChatStatus} />;
  return (
    <div className="app">
      <div
        className="header_body"
        onClick={() => {
          setActiveInput(false);
        }}
      >
        <Header
          setChatStatus={setChatStatus}
          setChoiceChat={setChoiceChat}
          choiceChat={choiceChat}
          dialog={dialogs[choiceChat]}
        />
        {choiceChat || choiceChat === 0 ? (
          <Chat dialog={dialogs[choiceChat]} />
        ) : (
          <ListChat setChoiceChat={setChoiceChat} dialogs={dialogs} />
        )}
      </div>

      <div>
        {activeInput || choiceChat || choiceChat === 0 ? (
          <InputActive saveMsg={saveMsg} choiceChat={choiceChat} />
        ) : (
          <Input setActiveInput={setActiveInput} />
        )}
      </div>
      <Label />
    </div>
  );
};

export default App;
