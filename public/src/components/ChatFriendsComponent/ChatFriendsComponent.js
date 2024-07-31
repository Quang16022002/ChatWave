import React, { useState, useRef, useEffect } from 'react';
import './ChatFriendsComponent.scss';
import { Upload, Input as AntdInput } from 'antd';
import { UploadOutlined, SmileOutlined } from '@ant-design/icons';
import Picker from 'emoji-picker-react';
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
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [tagsPopupVisible, setTagsPopupVisible] = useState(false);
  const [tagsPopupPosition, setTagsPopupPosition] = useState({ top: 0, left: 0 });
  const [tags] = useState(['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']); // Danh sách các tag
  const [selectedFile, setSelectedFile] = useState(null);
  const [bookmarkActive, setBookmarkActive] = useState(false);
  const [robotActive, setRobotActive] = useState(false);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  const handleEmojiClick = (event, emojiObject) => {
    handleInputChange({ target: { value: inputValue + emojiObject.emoji } });
  };

  const toggleEmojiPicker = () => {
    setIsEmojiPickerVisible(!isEmojiPickerVisible);
  };

  const handleFileChange = ({ file }) => {
    if (file.status === 'done') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file.originFileObj);
    }
  };

  const handleCustomSendMessage = () => {
    handleSendMessage({
      message: { text: inputValue, image: selectedFile },
    });
    setSelectedFile(null);
    handleInputChange({ target: { value: '' } });
  };

  const handleRobotClick = () => {
    if (popupVisible) {
      closePopup();
      setRobotActive(false);
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
      setRobotActive(true);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleBookmarkClick = () => {
    if (tagsPopupVisible) {
      closeTagsPopup();
      setBookmarkActive(false);
    } else {
      if (bookmarkIconRef.current) {
        const rect = bookmarkIconRef.current.getBoundingClientRect();
        setTagsPopupPosition({
          top: rect.top + window.scrollY + rect.height + 10,
          left: rect.left + window.scrollX,
        });
      }
      setTagsPopupVisible(true);
      setBookmarkActive(true);
    }
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
              <div style={{ width: "100%" }} className="d-flex justify-content-between">
                <div className="infoUser d-flex flex-column">
                  <p style={{ color: "rgb(255, 18, 89)", fontWeight: 500, marginBottom: 0 }}>Online</p>
                  <h1 style={{ fontSize: 16 }}>{friend.username}</h1>
                </div>
                <div className="d-flex align-items-center ChatFriendsComponent-item-header-right">
                  <i
                    className="fa-regular fa-bookmark"
                    onClick={handleBookmarkClick}
                    ref={bookmarkIconRef}
                    style={{
                      cursor: 'pointer',
                      color: bookmarkActive ? '#ff004d' : 'inherit',
                    }}
                  />
                  <i className="fa-solid fa-magnifying-glass" />
                  <i className="fa-solid fa-ellipsis-vertical" />
                </div>
              </div>
            </div>
          </div>
          <div className="ChatFriendsComponent-item-body">
            <div className="ChatFriendsComponent-content" ref={chatContentRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`ChatFriendsComponent-content-chat-item${msg.fromSelf ? "-me" : ""} py-2`}>
                  {!msg.fromSelf && (
                    <img src={friend.avatarImage} alt="chat-avatar" />
                  )}
                  {msg.message.image ? (
                    <img
                      src={msg.message.image}
                      alt="sent"
                      className="sent-image"
                    />
                  ) : (
                    <p>{msg.message.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="ChatFriendsComponent-item-bottom">
            <div className="ChatFriendsComponent-item-bottom-icon d-flex">
              <div className="ChatFriendsComponent-item-bottom-icon-left">
                <i className="fa-solid fa-microphone" />
                <Upload
                  beforeUpload={() => false}
                  onChange={handleFileChange}
                  showUploadList={false}
                >
                  <UploadOutlined />
                </Upload>
                <i className="fa-solid fa-note-sticky" />
                <i className="fa-solid fa-gift" />
              </div>
              <div
                className="ChatFriendsComponent-item-bottom-icon-right"
                onClick={handleRobotClick}
                ref={robotIconRef}
                style={{
                  width: '100%',
                  cursor: 'pointer',
                  color: robotActive ? '#ff004d' : 'inherit',
                }}
              >
                <i className="fa-solid fa-robot" />
                <span>Tôi có thể gợi ý câu trả lời cho bạn...</span>
              </div>
            </div>
            <div className="ChatFriendsComponent-item-bottom-message d-flex align-items-center">
              <div className="ChatFriendsComponent-item-bottom-message-left">
                <AntdInput
                  style={{ marginLeft: 10, marginTop: 10 }}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Nhập tin nhắn..."
                  addonAfter={
                    <SmileOutlined onClick={toggleEmojiPicker} />
                  }
                />
                {isEmojiPickerVisible && (
                  <Picker pickerStyle={{ position: 'absolute', bottom: '50px', right: '50px' }} onEmojiClick={handleEmojiClick} />
                )}
              </div>
              <div className="ChatFriendsComponent-item-bottom-message-right">
                {inputValue.trim() || selectedFile ? (
                  <i className="fa-solid fa-paper-plane" onClick={handleCustomSendMessage} />
                ) : (
                  <i className="fa-solid fa-thumbs-up" />
                )}
              </div>
              <i className="fa-regular fa-image" />
              <i className="fa-solid fa-note-sticky" />
              <i className="fa-solid fa-gift" />
            </div>
          </div>
        </div>
      ) : (
        <p>Chọn một bạn bè để bắt đầu trò chuyện</p>
      )}
      {popupVisible && (
        <div className="ChatFriendsComponent-popup" style={{ marginLeft: '250px', marginTop: '-210px' }}>
          <div className="ChatFriendsComponent-popup-content">
            <div className='Suggest-bot-chatfriendcomponents'>
              <div className='Suggest-bot-chatfriendcomponents-left'>
                <h6>Tôi có thể gợi ý câu trả lời phù hợp, cùng với biểu tượng biểu cảm</h6>
              </div>
              <div className='Suggest-bot-chatfriendcomponents-right'>
                <img src={Chatbot} style={{ width: "100%" }} alt="Chatbot" />
              </div>
            </div>
            <div className='another-suggest-botchat'>
              <div className='another-suggest-botchat-left'>
                <button>Câu trả lời thông minh</button>
                <button>Thêm câu trả lời</button>
                <button>Gợi ý câu hỏi</button>
                <button>Thêm câu hỏi</button>
              </div>
              <div className='another-suggest-botchat-right'>
                <div className='suggest-item'>
                  <img src={book} alt="book" />
                  <p>Truyện hay</p>
                </div>
                <div className='suggest-item'>
                  <img src={coin} alt="coin" />
                  <p>Thẻ quà tặng</p>
                </div>
                <div className='suggest-item'>
                  <img src={pet} alt="pet" />
                  <p>Thú cưng</p>
                </div>
                <div className='suggest-item'>
                  <img src={light} alt="light" />
                  <p>Đèn</p>
                </div>
                <div className='suggest-item'>
                  <img src={time} alt="time" />
                  <p>Thời gian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {tagsPopupVisible && (
        <div className="ChatFriendsComponent-tags-popup" style={{ marginLeft: tagsPopupPosition.left, marginTop: tagsPopupPosition.top }}>
          <div className="ChatFriendsComponent-tags-popup-content">
            {tags.map((tag, index) => (
              <div key={index} className="ChatFriendsComponent-tags-popup-item">
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatFriendsComponent;
