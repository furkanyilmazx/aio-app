import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Input, Icon, Row, Col, Switch } from 'antd';
import { QR_TYPES } from './constants';
import { QrCodeRender } from './components';

import 'react-resizable/css/styles.css';
import './index.scss';

const TabPane = Tabs.TabPane;

class QRCodePage extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <Tabs
            className="qr-code-v-tabs"
            defaultActiveKey="0"
            tabPosition="left">
            {QR_TYPES.map((item, index) => (
              <TabPane
                tab={
                  <span>
                    <Icon type={item.icon} />
                    {item.name}
                  </span>
                }
                key={index}>
                {item.component}
              </TabPane>
            ))}
          </Tabs>
        </Col>
        <Col span={12}>
          <QrCodeRender />
        </Col>
      </Row>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCodePage);
