import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'antd';
import { PROFILE_MENU_ITEMS } from '../constants';

export default class ProfileMenu extends Component {
  render() {
    return (
      <Menu>
        {PROFILE_MENU_ITEMS.map((item) =>
          !item.id ? (
            <Menu.Divider />
          ) : (
            <Menu.Item key={item.id}>
              <Link to={item.value}>
                <Icon type={item.icon} />
                <span>{item.label}</span>
              </Link>
            </Menu.Item>
          )
        )}
      </Menu>
    );
  }
}
