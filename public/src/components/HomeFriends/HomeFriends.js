import React, { useState } from 'react';
import './HomeFriends.scss';
import UserFriendsComponent from '../UserFriendsComponent/UserFriendsComponent';
import { Modal, Button, Input, Select } from 'antd';

const { Option } = Select;

const HomeFriends = ({userData}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  console.log(userData)
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log('Phone Number:', phoneNumber);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div style={{ padding: 20 }}>
      <div className="HomeAll-top d-flex justify-content-between">
        <div className="HomeAll-top-left d-flex justify-content-between">
          <p>
            Bạn bè <span>10</span>
          </p>
          <div
          onClick={showModal}
            style={{ marginLeft: 20 }}
            className="Homechannel-top-left d-flex justify-content-between align-items-center"
          >
              Thêm bạn bè
          </div>
        </div>
        <div className="HomeAll-top-right d-flex justify-content-between">
          <p>Sắp xếp</p>
          <Select defaultValue="Gần đây" style={{ width: 120 }}>
            <Option value="Gần đây">Gần đây</Option>
            <Option value="Danh sách 03">Danh sách 03</Option>
            <Option value="Danh sách 04">Danh sách 04</Option>
          </Select>
        </div>
      </div>
      <div style={{ height: 'auto' }} className="row">
     
          <UserFriendsComponent userDataFriends={userData?.friends} />
      
      </div>
      <Modal
        title="Thêm bạn bè"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
      >
        <Input
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default HomeFriends;
