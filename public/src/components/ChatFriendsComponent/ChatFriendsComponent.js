import React, { useState } from "react";
import "./ChatFriendsComponent.scss";

const messages = [
  { fromSelf: false, text: "Bạn khỏe không?", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: false, text: "Nhớ ngày mai có lịch họp lớp nhé", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: true, text: "Địa điểm ở đâu vậy?" },
  { fromSelf: true, text: "Xa không" },
  { fromSelf: false, text: "HighLand Coffee", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: true, text: "Ok bạn, rất vui được gặp mọi người." },
  { fromSelf: false, text: "Mình sẽ có mặt đúng giờ.", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: true, text: "Tuyệt vời! Hẹn gặp lại!" },
  { fromSelf: false, text: "Okie, hẹn gặp lại.", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: true, text: "Chúng ta có những hoạt động gì" },
  { fromSelf: false, text: "Vui chơi, karaoke", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: true, text: "Xa không" },
  { fromSelf: false, text: "HighLand Coffee", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: true, text: "Ok bạn, rất vui được gặp mọi người." },
  { fromSelf: false, text: "Mình sẽ có mặt đúng giờ.", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: true, text: "Tuyệt vời! Hẹn gặp lại!" },
  { fromSelf: false, text: "Okie, hẹn gặp lại.", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
  { fromSelf: true, text: "Chúng ta có những hoạt động gì" },
  { fromSelf: false, text: "Vui chơi, karaoke", avatar: "https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" },
];

const ChatFriendsComponent = () => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChang = (e) => {
      setInputValue(e.target.value)
  }
  return (
    <div className="ChatFriendsComponent">
      <div className="row">
        <div className="ChatFriendsComponent-item col-md-4 col-sm-6 px-0">
          <div className="ChatFriendsComponent-item-header">
            <div className="d-flex align-items-center">
              <img
                style={{ marginLeft: 10 }}
                className="avatar-homeAll chatfriends-img"
                src="https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg"
                alt="friend-avatar"
              />
              <div style={{ width: "100%" }} className="d-flex justify-content-between">
                <div className="infoUser d-flex flex-column">
                  <p style={{ color: "rgb(255, 18, 89)", fontWeight: 500, marginBottom: 0 }}>Online</p>
                  <h1 style={{ fontSize: 16 }}>Nguyễn Đình Quang</h1>
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
              {messages.map((message, index) => (
                <div key={index} className={`ChatFriendsComponent-content-chat-item${message.fromSelf ? "-me" : ""} py-2`}>
                  {!message.fromSelf && (
                    <img
                      src={message.avatar}
                      alt="chat-avatar"
                    />
                  )}
                  <p>{message.text}</p>
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
                onChange={handleInputChang}
                placeholder="Nhập tin nhắn..." />
                <i className="fa-solid fa-face-smile"></i>
              </div>
              <div className="ChatFriendsComponent-item-bottom-message-right">
               {
                inputValue ? (

                  <i class="fa-solid fa-paper-plane"></i>
                ): (
                  <i className="fa-solid fa-thumbs-up"></i>

                )
               }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFriendsComponent;
