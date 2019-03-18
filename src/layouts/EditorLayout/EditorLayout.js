import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { SIDEBAR_MENUS } from '../DefaultLayout/constants';
import EditorLayoutHeader from './components/Header';
import EditorLayoutSider from './components/Sider';

const { Content } = Layout;

class EditorLayout extends Component {
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
    const { onOpenChange, toggle } = this;
    const { collapsed, openKeys } = this.state;
    const { location } = this.props;
    return (
      <Layout style={{ height: '100vh' }}>
        <Layout>
          <EditorLayoutHeader collapsed={this.state.collapsed} />
          <Layout>
            <EditorLayoutSider
              collapsed={collapsed}
              location={location}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              toggle={toggle}
            />
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
EditorLayout.propTypes = {};

/**
 * Example default prop definition
 */
EditorLayout.defaultProps = {};

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
)(withRouter(EditorLayout));
