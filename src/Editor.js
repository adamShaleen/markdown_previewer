import React from 'react';
import Header from './Header';
import EditorTextArea from './EditorTextArea';

function Editor(props) {

    const EDITOR_HEADER = "Editor"
    return (
      <div>
        <Header title={EDITOR_HEADER} />
        <EditorTextArea rawTextInput={props.rawTextInput}/>
      </div>
    )
}

export default Editor;
