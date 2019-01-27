import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Empty } from 'antd';

class HlsPage extends Component {
  render() {
    return <Empty />;
  }
}
HlsPage.propTypes = {};

HlsPage.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HlsPage);
