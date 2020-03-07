import React from 'react';

const Chat = ({ dialog }) => (
  <div className="chat">
    {dialog.msgs.map((item, i) => (
      <div
        key={dialog.nameSupport + i}
        className={`block_messages_person ${item.isCustomer &&
          'block_customer'}`}
      >
        {!item.isCustomer &&
          (dialog.msgs[i + 1] &&
          dialog.msgs[i + 1].isCustomer === item.isCustomer ? (
            <div className="imgFi" />
          ) : (
            <img src={dialog.srcImg} alt={dialog.nameSupport} />
          ))}
        <div className={`item_message ${item.isCustomer && 'msg_customer'}`}>
          <span>{item.msg}</span>
        </div>
      </div>
    ))}
  </div>
);

export default Chat;
