import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Radio } from 'antd';
import Flag from 'react-world-flags';

import './index.scss';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class LanguagePage extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
        Please select language
        </Col>
        <Col span={12} offset={6}>
          <RadioGroup className="language-radio" defaultValue="a">
            <RadioButton value="b">
              <Flag code="US" height="64" />
            </RadioButton>
            <RadioButton value="a">
              <Flag code="TUR" height="64" />
            </RadioButton>
            <RadioButton value="e">
              <Flag code="DEU" height="64" />
            </RadioButton>
          </RadioGroup>
        </Col>
      </Row>
    );
  }
}
LanguagePage.propTypes = {};

LanguagePage.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguagePage);
