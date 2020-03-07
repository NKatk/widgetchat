import React from 'react';

const ListChat = ({ setChoiceChat, dialogs }) => (
  <div className="list_chat">
    {dialogs.map((item, i) => (
      <div key={item.nameSupport + i} className="item_chat">
        <div className="img_chat">
          {!item.msgs[item.msgs.length - 1].isCustomer ? (
            <img src={item.srcImg} alt={item.nameSupport} />
          ) : (
            <img
              src="https://like.doctor/img/nologo/incognito.png"
              alt="anon"
            />
          )}
          <div className="preview_chat" onClick={() => setChoiceChat(i)}>
            {!item.msgs[item.msgs.length - 1].isCustomer ? (
              <div>{item.nameSupport}</div>
            ) : (
              <div>You</div>
            )}
            <br />
            <p>{item.msgs[item.msgs.length - 1].msg}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ListChat;
