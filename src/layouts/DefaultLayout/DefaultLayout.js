import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import './index.scss';
import logo from '../../assets/images/logo.png'
const { Header, Sider, Content } = Layout;

class DefaultLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{height: "100vh"}}>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className="fyx">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
           <img src={logo} alt="Smiley face" height="42" width="42"/>
            All-in-one App
          </Header>
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

/**
 * Should be defined for each page
 */
DefaultLayout.propTypes = {};

/**
 * Example default prop definition
 */
DefaultLayout.defaultProps = {};

/**
 * To assign state elements of store to our current page's props
 */
const mapStateToProps = (state) => ({});

/**
 * To assign actions to our current page's props
 */
const mapDispatchToProps = (dispatch) => ({});

/**
 * Connect current page to redux store
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
