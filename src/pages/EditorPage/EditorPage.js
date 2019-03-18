import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
//import MonacoEditor from 'react-monaco-editor';

const MonacoEditor = React.lazy(() => import('react-monaco-editor'));

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

  onChange = (value, i, j) => {
    console.log(value, i, j);
    this.setState({ code: value });
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
    const TITLE_MAP = {
      a: 'Left Window',
      b: 'Top Right Window',
      c: 'Bottom Right Window',
      new: 'New Window',
    };

    return (
      <Mosaic
        renderTile={(id, path) => (
          <MosaicWindow
            path={path}
            toolbarControls={[]}
            createNode={() => 'new'}
            title={TITLE_MAP[id]}>
            <MonacoEditor
              language="javascript"
              theme="vs-light"
              value={code}
              options={options}
              onChange={this.onChange}
              editorDidMount={this.editorDidMount}
              automaticLayout={true}
            />
          </MosaicWindow>
        )}
        initialValue={{
          direction: 'row',
          first: 'a',
          second: {
            direction: 'column',
            first: 'b',
            second: 'c',
          },
        }}
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
