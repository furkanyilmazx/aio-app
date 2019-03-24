import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tabs, Input, Icon, Row, Col, Switch } from 'antd';
import { QR_TYPES } from './constants';
import { QrCodeRender } from './components';

import 'react-resizable/css/styles.css';
import './index.scss';

const TabPane = Tabs.TabPane;

class QRCodePage extends Component {
  componentDidMount() {
    let params = new URLSearchParams(window.location.search);
    QR_TYPES.find((item) => params.get('type') === item.id) ||
      this.props.history.push({
        pathname: window.location.pathname,
      });
  }
  handleTabChange = (activeKey) => {
    this.props.history.push({
      pathname: window.location.pathname,
      search: `?type=${activeKey}`,
    });
  };
  render() {
    let params = new URLSearchParams(window.location.search);
    let path = QR_TYPES.find((item) => params.get('type') === item.id);
    path = path && path.id;
    return (
      <Tabs
        className="qr-code-v-tabs"
        onChange={this.handleTabChange}
        defaultActiveKey={path || QR_TYPES[0].id}
        tabPosition="left">
        {QR_TYPES.map((item) => (
          <TabPane
            tab={
              <span>
                <Icon type={item.icon} />
                {item.name}
              </span>
            }
            key={item.id}>
            <Row>
              <Col span={12}>{item.component}</Col>
              <Col span={12}>
                <QrCodeRender />
              </Col>
            </Row>
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

QRCodePage.propTypes = {};

QRCodePage.defaultProps = {};

const mapStateToProps = (state) => ({});

/**
 * To assign actions to our current page's props
 */
const mapDispatchToProps = (dispatch) => ({});

/**
 * Connect current page to redux store
 */
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QRCodePage)
);
