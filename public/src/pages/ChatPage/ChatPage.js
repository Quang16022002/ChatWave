import React, { useEffect, useState } from "react";
import "./ChatPage.scss";
import axios from "axios";
import ChatFriendsComponent from "../../components/ChatFriendsComponent/ChatFriendsComponent";
import { detailUserRoute, recieveMessageRoute, sendMessageRoute } from "../../utils/APIRoutes";
import { io } from "socket.io-client";

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState('chat-friends');
  const [friends, setFriends] = useState([]);
  const [currentFriend, setCurrentFriend] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const socket = io("http://localhost:3001");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const id = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))._id;
        const response = await axios.get(`${detailUserRoute}/${id}`);
        setFriends(response.data.user.friends);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (currentFriend) {
      socket.emit("add-user", JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))._id);

      socket.on("msg-recieve", (msg) => {
        setMessages((prevMessages) => [...prevMessages, { fromSelf: false, message: msg }]);
      });
    }
  }, [currentFriend]);

  const handleTabClick = async (tab, friend = null) => {
    setActiveTab(tab);
    setCurrentFriend(friend);

    if (friend) {
      const userId = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))._id;
      const friendId = friend._id;
      const response = await axios.get(recieveMessageRoute(userId, friendId));
      setMessages(response.data);
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    const userId = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))._id;
    const data = {
      from: userId,
      to: currentFriend._id,
      text: newMessage,
    };

    socket.emit("send-msg", {
      to: currentFriend._id,
      msg: newMessage,
    });

    await axios.post(sendMessageRoute, data);
    setMessages((prevMessages) => [...prevMessages, { fromSelf: true, message: { text: newMessage } }]);
    setNewMessage("");
  };

  return (
    <div className="ChatPage">
      <div className='ChatPage-header d-flex'>
        <ul className='d-flex'>
          <li
            className={activeTab === 'chat-friends' ? 'active-chat' : ''} 
            onClick={() => handleTabClick('chat-friends')}
          >
            <i style={{marginRight:5, color:'rgb(2, 230, 161)', fontSize:20}} className="fa-solid fa-droplet"></i>
            Bạn bè
          </li>
          {friends.map((friend, index) => (
            <li
              key={index}
              className={activeTab === `chat-${index}` ? 'active-chat' : ''}
              onClick={() => handleTabClick(`chat-${index}`, friend)}
            >
              <img src={friend.avatarImage} alt={friend.username} />
              {friend.username}
            </li>
          ))}
          <li><i className="fa-solid fa-plus"></i></li>
        </ul>
      </div>

      {(activeTab === 'chat-friends' || activeTab.startsWith('chat-')) && (
        <ChatFriendsComponent friend={currentFriend} messages={messages} newMessage={newMessage} handleInputChange={handleInputChange} handleSendMessage={handleSendMessage} />
      )}
    </div>
  );
};

export default ChatPage;
