import React from 'react';
import Logo from './logo';
import Back from './back';
import Close from './close';
import TextLabel from './textLabel';

const Header = ({ setChatStatus, setChoiceChat, choiceChat, dialog }) => (
  <div className={choiceChat || choiceChat === 0 ? 'active_header' : 'header'}>
    <div className="logo_close">
      {choiceChat || choiceChat === 0 ? (
        <div className="back_person">
          <div className="back" onClick={() => setChoiceChat(null)}>
            <Back />
          </div>
          <div className="person">
            <img src={dialog.srcImg} alt={dialog.nameSupport} />
            <span>{dialog.nameSupport}</span>
          </div>
        </div>
      ) : (
        <div>
          <Logo />
        </div>
      )}
      <div onClick={() => setChatStatus(false)} className="close">
        <Close />
      </div>
    </div>
    {!choiceChat ||
      (choiceChat === 0 && (
        <div className="text_label">
          <TextLabel />
        </div>
      ))}
  </div>
);

export default Header;
