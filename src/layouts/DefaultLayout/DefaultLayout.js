import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/images/logo.png';
import { SIDEBAR_MENUS } from '../../constants';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class DefaultLayout extends Component {
  state = {
    collapsed: localStorage.getItem('side_menu_toogle') === 'true',
    openKeys: SIDEBAR_MENUS.filter(
      (menu_item) => menu_item.value === this.props.location.pathname
    ).map((item) => item.parent && item.parent.toString()) || ['0'],
  };

  toggle = () => {
    localStorage.setItem('side_menu_toogle', !this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (
      SIDEBAR_MENUS.filter((tmp_menu) => tmp_menu.parent === null)
        .map((item) => item.id.toString())
        .indexOf(latestOpenKey) === -1
    ) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
    localStorage.setItem('side_menu_openedkeys', this.state.openKeys);
  };

  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className="fyx">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <img src={logo} alt="Smiley face" height="42" width="42" />
            All-in-one App
          </Header>
          <Layout>
            <Sider
              className="fyx-dl-sidemenu"
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={SIDEBAR_MENUS.filter(
                  (menu_item) =>
                    menu_item.value === this.props.location.pathname
                ).map((item) => item.id.toString())}
                {...!this.state.collapsed && { openKeys: this.state.openKeys }}
                {...!this.state.collapsed && {
                  onOpenChange: this.onOpenChange,
                }}>
                {SIDEBAR_MENUS.map(
                  (menu) =>
                    !menu.parent &&
                    (SIDEBAR_MENUS.filter(
                      (tmp_menu) => tmp_menu.parent === menu.id
                    ).length > 0 ? (
                      <SubMenu
                        key={menu.id}
                        title={
                          <span>
                            <Icon type={menu.icon} />
                            <span>{menu.label}</span>
                          </span>
                        }>
                        {SIDEBAR_MENUS.filter(
                          (tmp_menu) => tmp_menu.parent === menu.id
                        ).map((sub_menu) => (
                          <Menu.Item key={sub_menu.id}>
                            <Link to={sub_menu.value}>
                              <Icon type={sub_menu.icon} />
                              <span>{sub_menu.label}</span>
                            </Link>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    ) : (
                      <Menu.Item key={menu.id}>
                        <Link to={menu.value}>
                          <Icon type={menu.icon} />
                          <span>{menu.label}</span>
                        </Link>
                      </Menu.Item>
                    ))
                )}
              </Menu>
            </Sider>
            <Content className="fyx-dl-content">{this.props.children}</Content>
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
)(withRouter(DefaultLayout));
