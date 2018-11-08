import React from 'react';
import Header from './Header';
import EditorTextArea from './EditorTextArea';

function Editor() {
    const EDITOR_HEADER = "Editor"
    return (
      <div>
        <Header title={EDITOR_HEADER} />
        <EditorTextArea />
      </div>
    )
}

export default Editor;
