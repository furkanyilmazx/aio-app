import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRemoteData, loadedRemoteData } from '../../actions';
import { SortablePane, Pane } from 'react-sortable-pane';
import Splitter from 'm-react-splitters';
import MonacoEditor from 'react-monaco-editor';
import 'm-react-splitters/lib/splitters.css';
import '../Pages.scss';


class EditorPage extends Component {
  editor = null;
  state = {
    code: '// type your code...',
  };

  editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor, monaco);
    console.log('editorDidMount', editor, editor.getValue(), editor.getModel());

    editor.focus();
    this.editor = editor;
  };

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: true,
    };

    return (
      <MonacoEditor
        language="javascript"
        theme="vs-light"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
        automaticLayout={true}
      />
    );
  }
}

/**
 * Should be defined for each page
 */
EditorPage.propTypes = {};

/**
 * Example default prop definition
 */
EditorPage.defaultProps = {
  defaultProp: false,
};

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
)(EditorPage);
