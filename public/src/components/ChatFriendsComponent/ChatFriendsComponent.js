import React, { useEffect, useRef, useState } from 'react';
import './ChatFriendsComponent.scss';
import { Upload, Input as AntdInput } from 'antd';
import { UploadOutlined, SmileOutlined } from '@ant-design/icons';
import Picker from 'emoji-picker-react';

const ChatFriendsComponent = ({ friend, messages, inputValue, handleInputChange, handleSendMessage }) => {
  const chatContentRef = useRef(null);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Cuộn xuống cuối mỗi khi tin nhắn thay đổi
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
    if (selectedFile) {
      handleSendMessage({
        message: { text: inputValue, image: selectedFile },
      });
      setSelectedFile(null);
    } else {
      handleSendMessage({
        message: { text: inputValue },
      });
    }
    handleInputChange({ target: { value: '' } });
  };

  return (
    <div className="ChatFriendsComponent">
      {friend ? (
        <div className="ChatFriendsComponent-item  px-0">
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
                <i className="fa-solid fa-microphone"></i>
                {/* <Upload
                  beforeUpload={() => false} // Ngăn tải lên ngay lập tức
                  onChange={handleFileChange}
                  showUploadList={false} // Ẩn danh sách tải lên mặc định
                >
                  <UploadOutlined />
                </Upload> */}
                <i  className="fa-solid fa-note-sticky"></i>
                <i className="fa-solid fa-gift"></i>
              </div>
              <div className="ChatFriendsComponent-item-bottom-icon-right">
                <i className="fa-solid fa-robot"></i>
                <span>Tôi có thể gợi ý câu trả lời cho bạn...</span>
              </div>
            </div>
            <div className="ChatFriendsComponent-item-bottom-message d-flex align-items-center">
              <div className="ChatFriendsComponent-item-bottom-message-left">
                <AntdInput
                style={{marginLeft:10, marginTop:10
                
                }}
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
              <diva style={{marginTop:10}} className="ChatFriendsComponent-item-bottom-message-right">
                {inputValue.trim() || selectedFile ? (
                  <i className="fa-solid fa-paper-plane" onClick={handleCustomSendMessage}></i>
                ) : (
                  <i className="fa-solid fa-thumbs-up"></i>
                )}
              </diva>
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
