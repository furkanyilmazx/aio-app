import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar } from 'antd';
import '../Pages.scss';

class CalendarPage extends Component {
  render() {
    return <Calendar fullscreen />;
  }
}

CalendarPage.propTypes = {};

CalendarPage.defaultProps = {};

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
)(CalendarPage);
