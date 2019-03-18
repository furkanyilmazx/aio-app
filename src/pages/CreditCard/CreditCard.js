import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Row, Col } from 'antd';
import CreditCardComp from 'react-creditcard';

import 'react-creditcard/lib/card.css';

class CreditCard extends Component {
  state = {
    cardNumber: '',
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={12}>
            <CreditCardComp
              number={this.state.cardNumber}
              focused="number"
              backDescriptionText="Use of this card is governed by the conditions of use. You must not disclose your PIN to anyone."
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Basic usage"
              onChange={(e) => this.setState({ cardNumber: e.target.value })}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
CreditCard.propTypes = {};

CreditCard.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCard);
