import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Icon, Menu, Popover, Avatar } from 'antd';
import logo from '../../../assets/images/logo.png';

const { Header } = Layout;

class DefaultLayoutHeader extends Component {
  render() {
    const { collapsed, toggle } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key="1fdsfdsf">
          <Icon type="user" />
          Profile
        </Menu.Item>
        <Menu.Item key="2fdsfdsfdsf">
          <Icon type="setting" />
          Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="dsaasdsdsd">
          <Icon type="question-circle" />
          Help
        </Menu.Item>
        <Menu.Item key="3fdsfdsfdss">
          <Link to="/lang">
            <Icon type="global" />
            Language
          </Link>
        </Menu.Item>
        <Menu.Item key="gfgfgf">
          <Icon type="safety" />
          Privacy
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4sssfdsf">
          <Icon type="logout" />
          Log Out
        </Menu.Item>
      </Menu>
    );
    return (
      <Header
        style={{
          background: '#fff',
          padding: 0,
          height: '44px',
          lineHeight: '44px',
        }}
        className="fyx">
        <Icon
          className="trigger"
          style={{}}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <img
          src={logo}
          alt="Smiley face"
          style={{
            width: 'auto',
            height: '80%',
            marginLeft: '10px',
            userSelect: 'none',
          }}
        />
        <span style={{ marginLeft: '10px', userSelect: 'none' }}>
          All-in-one App
        </span>
        <div style={{ float: 'right', marginRight: '15px' }}>
          <Popover
            placement="bottomRight"
            overlayClassName="user-profile-popover"
            content={menu}
            title="furkan yılmaz (furkanyx)"
            trigger="click">
            <Avatar
              style={{ cursor: 'pointer' }}
              shape="square"
              icon="user"
              src="https://trello-avatars.s3.amazonaws.com/fb13d377c9b7a4cff0b03f116caf1792/30.png"
            />
          </Popover>
        </div>
      </Header>
    );
  }
}

DefaultLayoutHeader.propTypes = {
  collapsed: PropTypes.bool,
};

export default DefaultLayoutHeader;
