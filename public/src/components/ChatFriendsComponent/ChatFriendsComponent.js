import React from 'react';
import './ChatFriendsComponent.scss';

const ChatFriendsComponent = ({ friend, messages, inputValue, handleInputChange, handleSendMessage }) => {
  return (
    <div className="ChatFriendsComponent">
      {friend ? (
        <div className="row">
          <div className="ChatFriendsComponent-item col-md-4 col-sm-6 px-0">
            <div className="ChatFriendsComponent-item-header">
              <div className="d-flex align-items-center">
                <img
                  style={{ marginLeft: 10 }}
                  className="avatar-homeAll chatfriends-img"
                  src={friend.avatarImage}
                  alt="friend-avatar"
                />
                <div style={{ width: "100%" }} className="d-flex justify-content-between">
                  <div className="infoUser d-flex flex-column">
                    <p style={{ color: "rgb(255, 18, 89)", fontWeight: 500, marginBottom: 0 }}>Online</p>
                    <h1 style={{ fontSize: 16 }}>{friend.username}</h1>
                  </div>
                  <div className="d-flex align-items-center ChatFriendsComponent-item-header-right">
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="ChatFriendsComponent-item-body">
              <div className="ChatFriendsComponent-time">02/06/2024</div>
              <div className="ChatFriendsComponent-content">
                {messages.map((msg, index) => (
                  <div key={index} className={`ChatFriendsComponent-content-chat-item${msg.fromSelf ? "-me" : ""} py-2`}>
                    {!msg.fromSelf && (
                      <img
                        src={friend.avatarImage}
                        alt="chat-avatar"
                      />
                    )}
                    <p>{msg.message.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="ChatFriendsComponent-item-bottom">
              <div className="ChatFriendsComponent-item-bottom-icon d-flex">
                <div className="ChatFriendsComponent-item-bottom-icon-left">
                  <i className="fa-solid fa-microphone"></i>
                  <i className="fa-regular fa-image"></i>
                  <i className="fa-solid fa-note-sticky"></i>
                  <i className="fa-solid fa-gift"></i>
                </div>
                <div className="ChatFriendsComponent-item-bottom-icon-right"> 
                  <i className="fa-solid fa-robot"></i>
                  <span>Tôi có thể gợi ý câu trả lời cho bạn...</span>
                </div>
              </div>
              <div className="ChatFriendsComponent-item-bottom-message d-flex align-items-center">
                <div className="ChatFriendsComponent-item-bottom-message-left">
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập tin nhắn..." 
                  />
                  <i className="fa-solid fa-face-smile"></i>
                </div>
                <div className="ChatFriendsComponent-item-bottom-message-right">
                  {inputValue.trim() ? (
                    <i className="fa-solid fa-paper-plane" onClick={handleSendMessage}></i>
                  ) : (
                    <i className="fa-solid fa-thumbs-up"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Chọn một bạn bè để bắt đầu trò chuyện</p>
      )}
    </div>
  );
};

export default ChatFriendsComponent;
