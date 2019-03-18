import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar } from 'antd';

class CalendarPage extends Component {
  render() {
    return <Calendar fullscreen />;
  }
}

CalendarPage.propTypes = {};

CalendarPage.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarPage);
