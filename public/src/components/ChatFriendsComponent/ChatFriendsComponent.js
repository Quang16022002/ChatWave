import React from "react";
import "./ChatFriendsComponent.scss";
const ChatFriendsComponent = () => {
  return (
    <div className="ChatFriendsComponent">
      <div className="row">
        <div className="ChatFriendsComponent-item col-md-4 col-sm-6 px-0">
          <div className="ChatFriendsComponent-item-header">
            <div className=" d-flex align-items-center ">
              <img
                style={{ marginLeft: 10 }}
                className="avatar-homeAll chatfriends-img"
                src="https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg"
              />
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-between"
              >
                <div className="infoUser d-flex flex-column ">
                  <p
                    style={{
                      color: "rgb(255, 18, 89)",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    Online
                  </p>
                  <h1 style={{ fontSize: 16 }}>Nguyễn Đình Quang</h1>
                </div>
                <div className="d-flex align-items-center ChatFriendsComponent-item-header-right">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="ChatFriendsComponent-item-body">
            <div className="ChatFriendsComponent-time">02/06/2024</div>
            <div className="ChatFriendsComponent-content">
              <div className="ChatFriendsComponent-content-chat-item">
                <img src="https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" />
                <p>Bạn khỏa không</p>
              </div>
              <div className="ChatFriendsComponent-content-chat-item">
                <img src="https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" />
                <p>
                  Nhớ ngày mai có lịch <br></br>họp lớp nhé
                </p>
              </div>

              <div className="ChatFriendsComponent-content-chat-item-me">
                <p>Tôi khỏe, địa điểm ở đâu vậy</p>
              </div>
            <div className="ChatFriendsComponent-content-chat-item">
              <img src="https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" />
              <p>HighLand coffe</p>
            </div>
            </div>
          </div>

          <div className="ChatFriendsComponent-item-bottom">đaaf</div>
        </div>
        <div className="ChatFriendsComponent-item col-md-4 col-sm-6 px-0">
          <div className="ChatFriendsComponent-item-header">
            <div className=" d-flex align-items-center ">
              <img
                className="avatar-homeAll chatfriends-img"
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-95.jpg"
              />
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-between"
              >
                <div className="infoUser d-flex flex-column ">
                  <p
                    style={{
                      color: "rgb(148, 148, 148)",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    Offline
                  </p>
                  <h1 style={{ fontSize: 16 }}>Nguyễn Tuân</h1>
                </div>
                <div className="d-flex align-items-center ChatFriendsComponent-item-header-right">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ChatFriendsComponent-item col-md-4 col-sm-6 px-0">
          <div className="ChatFriendsComponent-item-header">
            <div className=" d-flex align-items-center ">
              <img
                className="avatar-homeAll chatfriends-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYwyHQmE53Lfk8lPBtwL4CGA80jpbKVESEI84g2QktFGxJvgnWKlFbt1N3s0gzaEykKY&usqp=CAU"
              />
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-between"
              >
                <div className="infoUser d-flex flex-column ">
                  <p
                    style={{
                      color: "rgb(148, 148, 148)",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    Offline
                  </p>
                  <h1 style={{ fontSize: 16 }}>văn Thịnh</h1>
                </div>
                <div
                  style={{ marginRight: 10 }}
                  className="d-flex align-items-center ChatFriendsComponent-item-header-right"
                >
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFriendsComponent;
