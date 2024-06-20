import React from 'react';
import './style.css';
import { matchPath } from 'react-router-dom';

// Create Owner

import { MenuFoldOutlined, MenuUnfoldOutlined,HomeOutlined,CommentOutlined,FundOutlined,UserAddOutlined,UsergroupAddOutlined, } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';

// import img của slider bar
import sb_img from '../Slider_bar/asset/img/sb_img.png';
import Header_content from '../Header/Header_content';

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
//props. chi
const Slide_bar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('1');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

  React.useEffect(() => {
    const OwnerSTR = 'GarageOwner';
    const ManageSTR = 'GarageManage';
    const ServiceSTR = 'GarageService';

    if (location.pathname.includes(OwnerSTR)) {
      setSelectedMenu('1');
    }
    if (location.pathname.includes(ManageSTR)) {
      setSelectedMenu('2');
    }
    if (location.pathname.includes(ServiceSTR)) {
      setSelectedMenu('3');
    }
  }, [location.pathname]);
  return (
    <Layout>
      <Sider
        theme="light"
        className="Slide_bar"
        trigger={null}
        collapsible
        collapsed={collapsed}>

        <Link to="/"><p className="Slider_text">Menu</p></Link>


        <Menu
          className="sb_item"
          theme="light"
          mode="inline"
          defaultSelectedKeys={[]}
          selectedKeys={[selectedMenu]}
          onSelect={({ key }) => setSelectedMenu(key)}
          items={[
            {
              key: '1',
              icon: <HomeOutlined  />,
              label: <Link to="/slide">Trang chủ</Link>,
            },
            {
              key: '2',
              icon: <CommentOutlined />,
              label: <Link to="/slide">Tin nhắn</Link>,
            },
            {
              key: '3',
              icon: <FundOutlined />,
              label: <Link to="/slide">Không biết</Link>,
            },
            {
              key: '4',
              icon: <UserAddOutlined />,
              label: <Link to="/slide">Thêm bạn bè</Link>,
            },
            {
              key: '5',
              icon: <UsergroupAddOutlined />,
              label: <Link to="/slide">Thêm nhóm</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            className: "customer-header",
            padding: 0,
            background: colorBgContainer,
            
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <Header_content></Header_content>
          {/* <Logout></Logout> */}
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            // padding: 24,
            minHeight: 280,
            background:
              selectedMenu === '2' ||
                selectedMenu === '3' ||
                selectedMenu === '4'
                ? '#e6e6e6'
                : colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Slide_bar;