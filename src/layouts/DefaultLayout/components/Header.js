import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Popover, Avatar } from 'antd';
import { ProfileMenu } from '../components';
import { Logo } from '../../../components';

const { Header } = Layout;

class DefaultLayoutHeader extends Component {
  render() {
    const { collapsed, toggle } = this.props;
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
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <Logo aa="dsad" />
        <div style={{ float: 'right', marginRight: '15px' }}>
          <Popover
            placement="bottomRight"
            overlayClassName="user-profile-popover"
            content={<div>Notifications</div>}
            title="Notifications"
            trigger="click">
            <Avatar
              style={{
                color: '#1890ff',
                backgroundColor: '#e6f7ff',
                border: '1px solid #1890ff',
                cursor: 'pointer',
                marginRight: '7px',
              }}
              shape="square"
              icon="notification"
            />
          </Popover>
          <Popover
            placement="bottomRight"
            overlayClassName="user-profile-popover"
            content={<ProfileMenu />}
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
