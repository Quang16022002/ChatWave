import React, { useState, useRef, useEffect } from 'react';
import './ChatFriendsComponent.scss';
import Chatbot from '../../assets/bot-chat-1.jpg';
import book from "../../assets/book.jpg";
import coin from "../../assets/coin.jpg";
import pet from "../../assets/pet.jpg";
import light from "../../assets/light.jpg";
import time from "../../assets/time.jpg";
const ChatFriendsComponent = ({ friend, messages, inputValue, handleInputChange, handleSendMessage }) => {
  const chatContentRef = useRef(null);
  const robotIconRef = useRef(null);
  const bookmarkIconRef = useRef(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [tagsPopupVisible, setTagsPopupVisible] = useState(false);
  const [tagsPopupPosition, setTagsPopupPosition] = useState({ top: 0, left: 0 });
  const [tags] = useState(['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']); // Danh sách các tag
  const [bookmarkActive, setBookmarkActive] = useState(false);
  const [robotActive, setRobotActive] = useState(false);
  const [detailsPopupVisible, setDetailsPopupVisible] = useState(false);
  const [ellipsisActive, setEllipsisActive] = useState(false);
  
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

   
  const handleRobotClick = () => {
    if (popupVisible) {
      closePopup();
      setRobotActive(false); // Trở lại màu cũ khi tắt popup
    } else {
      if (robotIconRef.current) {
        const rect = robotIconRef.current.getBoundingClientRect();
        const popupHeight = 180;
        setPopupPosition({
          top: rect.top + window.scrollY - popupHeight - 10,
          left: rect.left + window.scrollX - rect.width / 2,
        });
      }
      setPopupVisible(true);
      setRobotActive(true); // Đổi màu khi bật popup
    }
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleBookmarkClick = () => {
    if (tagsPopupVisible) {
      closeTagsPopup();
      setBookmarkActive(false); // Trở lại màu cũ khi tắt popup
    } else {
      if (bookmarkIconRef.current) {
        const rect = bookmarkIconRef.current.getBoundingClientRect();
        setTagsPopupPosition({
          top: rect.top + window.scrollY + rect.height + 10,
          left: rect.left + window.scrollX,
        });
      }
      setTagsPopupVisible(true);
      setBookmarkActive(true); // Đổi màu khi bật popup
    }
  };
 
  const handleEllipsisClick = () => {
    if (detailsPopupVisible) {
      closeDetailsPopup();
      setEllipsisActive(false); // Trở lại màu cũ khi tắt popup
    } else {
      setDetailsPopupVisible(true);
      setEllipsisActive(true); // Đổi màu khi bật popup
    }
  };
  
  const closeDetailsPopup = () => {
    setDetailsPopupVisible(false);
    setEllipsisActive(false); // Trở lại màu cũ khi tắt popup
  };
  

  const closeTagsPopup = () => {
    setTagsPopupVisible(false);
  };

  return (
    <div className="ChatFriendsComponent">
      {friend ? (
        <div className="ChatFriendsComponent-item px-0">
          <div className="ChatFriendsComponent-item-header">
            <div className="d-flex align-items-center">
              <img
                style={{ marginLeft: 10 }}
                className="avatar-homeAll chatfriends-img"
                src={friend.avatarImage}
                alt="friend-avatar"
              />
              <div style={{ width: '100%' }} className="d-flex justify-content-between">
                <div className="infoUser d-flex flex-column">
                  <p style={{ color: 'rgb(255, 18, 89)', fontWeight: 500, marginBottom: 0 }}>Online</p>
                  <h1 style={{ fontSize: 16 }}>{friend.username}</h1>
                </div>
                <div className="d-flex align-items-center ChatFriendsComponent-item-header-right">
                <i
  className="fa-regular fa-bookmark"
  onClick={handleBookmarkClick}
  ref={bookmarkIconRef}
  style={{
    cursor: 'pointer',
    color: bookmarkActive ? '#ff004d' : 'inherit', // Đổi màu khi popup bật
  }}
></i>

                  <i className="fa-solid fa-magnifying-glass"></i>
                  <i
    className="fa-solid fa-ellipsis-vertical"
    onClick={handleEllipsisClick}
    style={{
      cursor: 'pointer',
      color: ellipsisActive ? '#ff004d' : 'inherit', // Đổi màu khi popup bật
    }}
  ></i>                </div>
              </div>
            </div>
          </div>
          <div className="ChatFriendsComponent-item-body">
            <div className="ChatFriendsComponent-content" ref={chatContentRef}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`ChatFriendsComponent-content-chat-item${msg.fromSelf ? '-me' : ''} py-2`}
                >
                  {!msg.fromSelf && <img src={friend.avatarImage} alt="chat-avatar" />}
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
              <div
  className="ChatFriendsComponent-item-bottom-icon-right"
  onClick={handleRobotClick}
  ref={robotIconRef}
  style={{
    width:'100%',
    cursor: 'pointer',
    color: robotActive ? '#ff004d' : 'inherit', // Đổi màu khi popup bật
  }}
>
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
                {isEmojiPickerVisible && (
                  <Picker pickerStyle={{ position: 'absolute', bottom: '60px', right: '60px' }} onEmojiClick={handleEmojiClick} />
                )}
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
      ) : (
        <p>Chọn một bạn bè để bắt đầu trò chuyện</p>
      )}
      {popupVisible && (
        <div className="ChatFriendsComponent-popup" style={{ marginLeft:'250px',marginTop:'-210px' }}>
          <div className="ChatFriendsComponent-popup-content">
            <div className='Suggest-bot-chatfriendcomponents'>
              <div className='Suggest-bot-chatfriendcomponents-left'>
                <h6>Tôi có thể gợi ý câu trả lời phù hợp, cùng với biểu tượng biểu cảm</h6>
              </div>
              <div className='Suggest-bot-chatfriendcomponents-right'>
                <img src={Chatbot} style={{ width: "100%" }} alt="Chatbot"></img>
              </div>
            </div>
            <div className='another-suggest-botchat'>
              <div className='another-suggest-botchat-left'>
                <button>Câu trả lời khác</button>
              </div>
              <div className='another-suggest-botchat-right'></div>
            </div>
          </div>
        </div>
      )}
      {tagsPopupVisible && (
        <div className="ChatFriendsComponent-tags-popup" style={{ marginTop:'-770px',width:'100%' }}>
          <div className="ChatFriendsComponent-tags-popup-content">
            <div className='item-tag-chat'> 
              <img src={book} style={{width:'30px',height:'30px'}}></img>
              <h5 style={{paddingTop:'5px',paddingRight:'5px'}}> Sách</h5>
              <h5 style={{color:"#ff004d",paddingTop:'4px'}}>6</h5>
            </div>
            <div className='item-tag-chat'> 
              <img src={coin} style={{width:'30px',height:'30px'}}></img>
              <h5 style={{paddingTop:'5px',paddingRight:'5px'}}> Tiền xu</h5>
              <h5 style={{color:"#ff004d",paddingTop:'4px'}}>9</h5>
            </div><div className='item-tag-chat'> 
              <img src={pet} style={{width:'30px',height:'30px'}}></img>
              <h5 style={{paddingTop:'5px',paddingRight:'5px'}}> Thú cưng</h5>
              <h5 style={{color:"#ff004d",paddingTop:'4px'}}>3</h5>
            </div>
            <div className='item-tag-chat'> 
              <img src={light} style={{width:'30px',height:'30px'}}></img>
              <h5 style={{paddingTop:'5px',paddingRight:'5px'}}> Ý tưởng</h5>
              <h5 style={{color:"#ff004d",paddingTop:'4px'}}>5</h5>
            </div>
            <div className='item-tag-chat'> 
              <img src={time} style={{width:'30px',height:'30px'}}></img>
              <h5 style={{paddingTop:'5px',paddingRight:'5px'}}> Thời gian</h5>
              <h5 style={{color:"#ff004d",paddingTop:'4px'}}>1</h5>
            </div>
            
          </div>
        </div>
      )}
      
    </div>
  );
};

export default ChatFriendsComponent;
