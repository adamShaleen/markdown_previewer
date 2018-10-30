import React, { Component } from 'react';
import Header from './Header';
import EditorTextArea from './EditorTextArea';

class Editor extends Component {
  render() {
    const EDITOR_HEADER = "Editor"
    return (
      <div>
        <Header title={EDITOR_HEADER} />
        <EditorTextArea />
      </div>
    )
  }
}

export default Editor;
