import React, { useEffect, useState } from "react";
import "./ChatPage.scss";
import axios from "axios";
import anh1 from '../../assets/anh1.jpg'
import anh2 from '../../assets/anh2.jpg'
import anh3 from '../../assets/anh3.jpg'
import anh4 from '../../assets/anh4.png'
import anh5 from '../../assets/anh5.jpg'
import ChatFriendsComponent from "../../components/ChatFriendsComponent/ChatFriendsComponent";
import {
  detailUserRoute,
  recieveMessageRoute,
  sendMessageRoute,
} from "../../utils/APIRoutes";
import { io } from "socket.io-client";
import Slider from "react-slick";

const ChatPage = () => {
  const [activeChats, setActiveChats] = useState([]); // List of currently active chat tabs
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState({});
  const [newMessages, setNewMessages] = useState({});

  const socket = io("http://localhost:3001");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const id = JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )._id;
        const response = await axios.get(`${detailUserRoute}/${id}`);
        setFriends(response.data.user.friends);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (activeChats.length > 0) {
      socket.emit(
        "add-user",
        JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
          ._id
      );

      socket.on("msg-recieve", (msg) => {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [msg.from]: [
            ...(prevMessages[msg.from] || []),
            { fromSelf: false, message: msg },
          ],
        }));
      });
    }
  }, [activeChats]);

  const handleTabClick = async (friend) => {
    const friendId = friend._id;
    const isActive = activeChats.some((chat) => chat._id === friendId);

    if (isActive) {
      setActiveChats((prevChats) =>
        prevChats.filter((chat) => chat._id !== friendId)
      );
    } else {
      setActiveChats((prevChats) => [...prevChats, friend]);

      const userId = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      )._id;

      try {
        const response = await axios.get(recieveMessageRoute(userId, friendId));

        setMessages((prevMessages) => ({
          ...prevMessages,
          [friendId]: response.data,
        }));

        setNewMessages((prevNewMessages) => ({
          ...prevNewMessages,
          [friendId]: "", // Initialize the new message input for this friend
        }));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
  };

  const handleInputChange = (e, friendId) => {
    const { value } = e.target;
    setNewMessages((prevNewMessages) => ({
      ...prevNewMessages,
      [friendId]: value,
    }));
  };

  const handleSendMessage = async (friendId) => {
    const newMessage = newMessages[friendId];
    if (!newMessage.trim()) return;

    const userId = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = {
      from: userId,
      to: friendId,
      text: newMessage,
    };

    console.log("Sending message data:", data); // Debug line

    try {
      socket.emit("send-msg", {
        to: friendId,
        msg: newMessage,
      });

      await axios.post(sendMessageRoute, data);

      setMessages((prevMessages) => ({
        ...prevMessages,
        [friendId]: [
          ...(prevMessages[friendId] || []),
          { fromSelf: true, message: { text: newMessage } },
        ],
      }));

      setNewMessages((prevNewMessages) => ({
        ...prevNewMessages,
        [friendId]: "", // Clear the input for this friend after sending
      }));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="ChatPage">
      <div className="ChatPage-header d-flex">
        <ul className="d-flex">
          <li>
            <i
              style={{ marginRight: 5, color: "rgb(2, 230, 161)", fontSize: 20 }}
              className="fa-solid fa-droplet"
            ></i>
            Danh sách bạn bè
          </li>
          {friends.map((friend) => (
            <li
              key={friend._id}
              className={
                activeChats.some((chat) => chat._id === friend._id)
                  ? "active-chat"
                  : ""
              }
              onClick={() => handleTabClick(friend)}
            >
              <img src={friend.avatarImage} alt={friend.username} />
              {friend.username}
            </li>
          ))}
          <li>+</li>
        </ul>
      </div>

      <div>
        <div className="d-flex window-chat">
          {activeChats.length > 0 ? (
            activeChats.map((friend) => (
              <div
                style={{ width: "33.33%", height: "100%" }}
                key={friend._id}
                className="window-chat-item active"
              >
                <ChatFriendsComponent
                  friend={friend}
                  messages={messages[friend._id] || []}
                  inputValue={newMessages[friend._id] || ""}
                  handleInputChange={(e) => handleInputChange(e, friend._id)}
                  handleSendMessage={() => handleSendMessage(friend._id)}
                />
              </div>
            ))
          ) : (
            <div className="no-chat-active">
             Chọn bạn bè để bắt đầu chò chuyện.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
