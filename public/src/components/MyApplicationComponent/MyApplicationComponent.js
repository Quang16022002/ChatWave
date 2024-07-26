import React from 'react'
import './MyApplicationComponent.scss'
import githubIcon from '../../assets/github-mark.png';
import { FileOutlined, FolderAddOutlined,LayoutOutlined,PlusSquareOutlined,TagOutlined,NotificationOutlined,
         SearchOutlined,EllipsisOutlined,UserAddOutlined,LinkOutlined 
} from '@ant-design/icons';
import googleDriveIcon from '../../assets/ggdrive.png';
import trelloIcon from '../../assets/trello.png';
import codefactorIcon from '../../assets/codefactor.png';
import dropboxIcon from '../../assets/doc1.png';
import gitlapIcon from '../../assets/gitlab.png';
const MyApplicationComponent = () => {
  return (
    <div>
      <div className='myappall'>
        <div className="myapp-left">
          <div className="header-myapp-left">
            <div className='inf-myappleft'>
            <img src={githubIcon} alt="Github Icon" style={{ width: '40px', height: '40px' }} />
            <h5>Github</h5>
            </div>
            <div className="icon-myappleft">
              <FileOutlined style={{ fontSize: '30px', color: 'orange', paddingTop: '5px' }} />
              <FolderAddOutlined style={{ fontSize: '30px', color: 'orange',paddingTop: '5px' }} />
            </div>
          </div>
          <div className='content-myapp-left'>
            <div className='item-content-myapp-left'>
            <LayoutOutlined style={{ fontSize: '30px', paddingTop: '5px' }} />
            <h5>Valorant</h5>
            </div>
            <div className='item-content-myapp-left'>
            <LayoutOutlined style={{ fontSize: '30px', paddingTop: '5px' }} />
            <h5>Liên Minh Huyền Thoại</h5>
            </div>
            <div className='item-content-myapp-left'>
            <LayoutOutlined style={{ fontSize: '30px',paddingTop: '5px' }} />
            <h5>CSGO</h5>
            </div>
            <div className='item-content-myapp-left'>
            <PlusSquareOutlined style={{ fontSize: '30px', color: 'orange',paddingTop: '5px' }} />
            <h5>Thêm dự án</h5>
            </div>
          </div>
        </div>
        
        <div className='myapp-middle'>
          <div className='header-myapp-middle'>
            <div className='header-myapp-middle-filename'>
            <div className='item-content-myapp-left'>
            <LayoutOutlined style={{ fontSize: '30px', paddingTop: '0px' }} />
            <h5>Valorant</h5>
            </div>
            </div>
            <div className='header-myapp-middle-search'>
            <TagOutlined style={{ fontSize: '30px',paddingTop: '5px',color:'orange',paddingRight:'20px' }}/>
            <NotificationOutlined style={{ fontSize: '30px',paddingTop: '5px' ,color:'orange'}}/>
            <div className="search-bar1">
      <SearchOutlined className="search-icon1" />
      <input
        type="text"
        className="search-input1"
        placeholder="Tìm kiếm "
      />
    </div>
    <EllipsisOutlined style={{ fontSize: '50px',paddingTop: '5px' }}/>
            </div>
          </div>
          <div className='menu-myapp-middle'>
            <div className='item-menu-myapp' style={{background: '#fff4e0'}}>
              <h5>Tin nhắn</h5>
            </div>
            <div className='item-menu-myapp'>
              <h5>Thông tin khác</h5>
            </div>
          </div>
          <div className='content1-myapp-middle'>
            <div className='content-1-1-myapp-middle'>
              <div className='icon-header1-myapp'>
              <img src={githubIcon} alt="Github Icon" style={{ width: '150px', height: '150px' }} />

              </div>
              <div className='welcome-header1-myapp'>
              <span>
  <h1 style={{ display: 'inline' }}>CHÀO MỪNG BẠN ĐẾN VỚI</h1>
  <h1 style={{ color: 'blue', display: 'inline' }}>@Github</h1>
</span>
<h1 style={{ color: 'blue' , paddingTop:"10px" }}>@Github hoạt động như nào</h1>

              </div>
            </div>
            <div className='content-1-2-myapp-middle'>
            <span>
  <h1 style={{display: 'inline'}}> Hãy bắt đầu lịch sử nhắn tin trực tiếp với </h1>
  <h1 style={{color:'#ff004d',display: 'inline'}}>#Valorant</h1>
  <h1 style={{display: 'inline'}}> Ngay bây giờ!</h1>
</span>
          <div style={{color:'#ff004d',display:'inline-block'}}>
          <UserAddOutlined style={{fontSize:'40px'}}/>
          <h1 style={{display:'inline'}}> Mời đồng nghiệp tham gia #Valorant</h1>
          </div>
            </div>
            
          </div>
          <div className='content2-myapp-middle'>
            <h5 style={{textAlign:'center'}}>26/7/2024</h5>
            <div className='content2-1-myapp-middle'>
              <div className='icon-content2-1-myapp-middle'>
              <img src={githubIcon} alt="Github Icon" style={{ width: '40px', height: '40px' }} />

              </div>
              <div className='content2-2-myapp-middle'>
              <h4 style={{color:'orange'}}>Github</h4>
              <div className='chat-content2-2-myapp-middle'>
                <h5>Bạn đã cài đặt thành công ứng dụng Github trên không gian làm việc Slack này! Đăng nhập tài khoản Github của bạn để sử dụng các lệnh</h5>
                <div className='connect-github-myapp'>
                  <h5 style={{color:'white'}}>Kết nối tài khoản Github</h5>
                </div>
                <h5>Hoàn tất đăng nhập bằng cách nhập mã xác minh được cung cấp cho bạn sau khi xác thực </h5>
                <button>Nhập mã</button>
              </div>
            </div>
            </div>
            <div className='input-content2-myapp-middle'>
            <div className="search-bar2">
      <LinkOutlined  className="search-icon2" />
      <input
        type="text"
        className="search-input2"
        placeholder="Viết tin nhắn"
      />
    </div>
            </div>
          </div>
        </div>
        <div className='myapp-right'>
        <img src={githubIcon} alt="Github Icon" style={{ width: '50%', height: 'auto',paddingBottom: '20px' }} />
        <img src={googleDriveIcon} alt="Github Icon" style={{ width: '50%', height: 'auto' ,paddingBottom: '20px'}} />
        <img src={dropboxIcon} alt="Github Icon" style={{ width: '50%', height: 'auto' ,paddingBottom: '20px'}} />
        <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="Github Icon" style={{ width: '50%', height: 'auto',paddingBottom:'20px' }} />
        <PlusSquareOutlined style={{fontSize:'87.617px', color:'orange',paddingBottom: '20px' }} />

        </div>
      </div>
    </div>
  )
}

export default MyApplicationComponent;
