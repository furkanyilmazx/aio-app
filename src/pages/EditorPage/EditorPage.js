import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import { loadRemoteData, loadedRemoteData } from '../../actions';
import Splitter from 'm-react-splitters';
import MonacoEditor from 'react-monaco-editor';
import 'm-react-splitters/lib/splitters.css';
import '../Pages.scss';

class EditorPage extends Component {
  editor = null;
  state = {
    code: '// type your code...',
  };

  handleResize = () => this.editor.layout();

  handleClick = () => {
    this.props.loadedRemoteData([]);
    this.props.loadRemoteData();
  };

  editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
    editor.focus();
    this.editor = editor;
  };
  onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  };

  componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

  render() {
    const { dataLoading, data } = this.props;
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
    };

    return (
      <Splitter
        position="horizontal"
        primaryPaneMaxHeight="80%"
        primaryPaneMinHeight={0}
        primaryPaneHeight="400px"
        dispatchResize={true}
        postPoned={true}>
        <Splitter
          position="vertical"
          primaryPaneMaxWidth="80%"
          primaryPaneMinWidth={0}
          primaryPaneWidth="400px"
          postPoned={false}>
          <div />
          <MonacoEditor
            language="javascript"
            theme="vs-light"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
            automaticLayout
          />
          <div />
        </Splitter>
        Console
        <div />
      </Splitter>
    );
  }
}

/**
 * Should be defined for each page
 */
EditorPage.propTypes = {
  dataLoading: PropTypes.bool,
  data: PropTypes.array,
  loadRemoteData: PropTypes.func,
  loadedRemoteData: PropTypes.func,
};

/**
 * Example default prop definition
 */
EditorPage.defaultProps = {
  defaultProp: false,
};

/**
 * To assign state elements of store to our current page's props
 */
const mapStateToProps = (state) => ({
  dataLoading: state.rootReducer.dataLoading,
  data: state.rootReducer.data,
});

/**
 * To assign actions to our current page's props
 */
const mapDispatchToProps = (dispatch) => ({
  loadRemoteData: () => dispatch(loadRemoteData()),
  loadedRemoteData: (data) => dispatch(loadedRemoteData(data)),
});

/**
 * Connect current page to redux store
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorPage);
