import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Avatar, Badge } from 'antd';
import logo from '../../../assets/images/logo.png';

const { Header } = Layout;

class EditorLayoutHeader extends Component {
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }} className="fyx">
        <img src={logo} alt="Smiley face" height="42" width="42" />
        All-in-one App
        <div style={{ float: 'right' }} />
      </Header>
    );
  }
}

EditorLayoutHeader.propTypes = {
};

export default EditorLayoutHeader;
