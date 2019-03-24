import React, { PureComponent } from 'react';
import { Spin, Icon, Row, Col } from 'antd';

export default class PageLoading extends PureComponent {
  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: '100%', width: '100%' }}>
        <Col span={2}>
          <Spin
            size="large"
            tip="Loading..."
            indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
          />
        </Col>
      </Row>
    );
  }
}
