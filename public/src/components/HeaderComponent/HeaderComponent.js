import React, { useState } from 'react';
import './HeaderComponent.scss';
import { AppstoreOutlined, SecurityScanOutlined, LockOutlined, FormatPainterOutlined,
  SwapOutlined, CommentOutlined, ShopOutlined, PicLeftOutlined, WindowsOutlined ,
  UserOutlined,PhoneOutlined,LinkOutlined,GroupOutlined
 } from "@ant-design/icons";
import { Modal } from 'antd';

const HeaderComponent = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isSettingModalVisible, setIsSettingModalVisible] = useState(false); // State for the setting modal
  const [isAccountModalVisible, setIsAccountModalVisible] = useState(false); // State for the account modal

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  const closePopover = () => {
    setIsPopoverVisible(false);
  };

  const showSettingModal = () => {
    setIsSettingModalVisible(true);
    setIsPopoverVisible(false); // Close the popover when modal opens
  };

  const showAccountModal = () => {
    setIsAccountModalVisible(true);
    setIsPopoverVisible(false); // Close the popover when modal opens
  };

  const handleSettingModalOk = () => {
    setIsSettingModalVisible(false);
  };

  const handleSettingModalCancel = () => {
    setIsSettingModalVisible(false);
  };

  const handleAccountModalOk = () => {
    setIsAccountModalVisible(false);
  };

  const handleAccountModalCancel = () => {
    setIsAccountModalVisible(false);
  };

  return (
    <div className='Header'>
      <div className='Header-left'>
        <h2>ChatWave</h2>
      </div>
      <div className='Header-center'>
        <AppstoreOutlined />
        <i style={{ marginLeft: 10 }} className="fa-solid fa-map-location-dot"></i>
      </div>
      <div className='Header-right'>
        <i className="fa-solid fa-cloud-arrow-up"></i>
        <i style={{ marginRight: 5 }} className="fa-solid fa-moon"></i>
        <img
          style={{ marginRight: 15, cursor: 'pointer' }}
          src='https://moc247.com/wp-content/uploads/2023/12/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_2.jpg'
          alt='User Avatar'
          onClick={togglePopover}
        />
        {isPopoverVisible && (
          <div className='popover'>
            <div className='header-component-inf-container'>
              <div className='img-inf-header-component'>
                <img
                  style={{ marginRight: 15, cursor: 'pointer' }}
                  src='https://moc247.com/wp-content/uploads/2023/12/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_2.jpg'
                  alt='User Avatar'
                  onClick={togglePopover}
                />
              </div>
              <div className='inf-username-header-component'>
                <h5 style={{ margin: '0' }}>Nguyen Thinh</h5>
                <p style={{ margin: '0', color: 'gray' }}>@Thinhdeptrai</p>
              </div>
            </div>
            <h6 onClick={showSettingModal} style={{cursor: 'pointer'}}>Cài đặt</h6>
            <h6 onClick={showAccountModal} style={{cursor: 'pointer'}}>Tài khoản</h6>
            <h6 href="#" onClick={closePopover} className='close-link'>Đăng xuất</h6>
          </div>
        )}
      </div>
      <Modal
        title="Cài đặt"
        visible={isSettingModalVisible}
        onOk={handleSettingModalOk}
        onCancel={handleSettingModalCancel}
        footer={null}
      >
        <div className='line'></div>
        <div className='setting-container-item'>
          <div className='setting-container-item-left'>
            <SecurityScanOutlined style={{fontSize:'24px'}}/>
          </div>
          <div className='setting-container-item-right'>
            <h6 style={{margin:'0'}}>Tài khoản và bảo mật</h6>
          </div>
        </div>
        <div className='setting-container-item'>
          <div className='setting-container-item-left'>
            <LockOutlined style={{fontSize:'24px'}}/>
          </div>
          <div className='setting-container-item-right'>
            <h6 style={{margin:'0'}}>Quyền riêng tư</h6>
          </div>
        </div>
        <div className='setting-container-item'>
          <div className='setting-container-item-left'>
            <FormatPainterOutlined style={{fontSize:'24px'}}/>
          </div>
          <div className='setting-container-item-right'>
            <h6 style={{margin:'0'}}>Giao diện</h6>
          </div>
        </div>
        <div className='setting-container-item'>
          <div className='setting-container-item-left'>
            <SwapOutlined style={{fontSize:'24px'}}/>
          </div>
          <div className='setting-container-item-right'>
            <h6 style={{margin:'0'}}>Tiện ích</h6>
          </div>
        </div>
        <div className='setting-container-item'>
          <div className='setting-container-item-left'>
            <CommentOutlined style={{fontSize:'24px'}}/>
          </div>
          <div className='setting-container-item-right'>
            <h6 style={{margin:'0'}}>Tin nhắn</h6>
          </div>
        </div>
        <div className='setting-container-item'>
          <div className='setting-container-item-left'>
            <ShopOutlined style={{fontSize:'24px'}}/>
          </div>
          <div className='setting-container-item-right'>
            <h6 style={{margin:'0'}}>Tài khoản doanh nghiệp</h6>
          </div>
        </div>
        <div className='setting-container-item'>
          <div className='setting-container-item-left'>
            <PicLeftOutlined style={{fontSize:'24px'}}/>
          </div>
          <div className='setting-container-item-right'>
            <h6 style={{margin:'0'}}>Cấu hình proxy</h6>
          </div>
        </div>
        <div className='setting-container-item'>
          <div className='setting-container-item-left'>
            <WindowsOutlined style={{fontSize:'24px'}}/>
          </div>
          <div className='setting-container-item-right'>
            <h6 style={{margin:'0'}}>Thiết bị</h6>
          </div>
        </div>
      </Modal>

      <Modal
        title="Thông tin tài khoản"
        visible={isAccountModalVisible}
        onOk={handleAccountModalOk}
        onCancel={handleAccountModalCancel}
        footer={null}
      >
        <div className='line'></div>
        <div className='background-user'>
          
          <div className='avt-user'>
        </div>
        </div>
        
        <div className='user-info'>
            <h5>Nguyen Thinh</h5>
            <span role="img" aria-label="smile" className="emoji">&#x1F600;&#x1F600;&#x1F600;</span> {/* Mặt cười */}
            
        </div>

        <div className='user-item'>
          <div className='user-item-left'>
          <UserOutlined style={{paddingRight:'10px'}}/> Họ và tên:
          </div>
          <div className='user-item-right'>
          Nguyễn Văn Thịnh
          </div>
        </div>
        <div className='user-item'>
          <div className='user-item-left'>
          <LinkOutlined style={{paddingRight:'10px'}}/> Tên người dùng:
          </div>
          <div className='user-item-right'>
          @Thinhdepzai
          </div>
        </div>
        <div className='user-item'>
          <div className='user-item-left'>
          <PhoneOutlined style={{paddingRight:'10px'}}/>Số điện thoại:
          </div>
          <div className='user-item-right'>
          +84 916351973
          </div>
        </div>
        <div className='user-item'>
          <div className='user-item-left'>
          <GroupOutlined style={{paddingRight:'10px'}}/> Ngày sinh:
          </div>
          <div className='user-item-right'>
          06/03/2000
          </div>
        </div>
        
      </Modal>
    </div>
  );
};

export default HeaderComponent;
