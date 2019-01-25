import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';
import logo from '../../../assets/images/logo.png';

const { Header } = Layout;

class DefaultLayoutHeader extends Component {
  render() {
    const { collapsed, toggle} = this.props;
    return (
      <Header style={{ background: '#fff', padding: 0 }} className="fyx">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <img src={logo} alt="Smiley face" height="42" width="42" />
        All-in-one App
      </Header>
    );
  }
}

DefaultLayoutHeader.propTypes = {
  collapsed: PropTypes.bool,
};

export default DefaultLayoutHeader;
