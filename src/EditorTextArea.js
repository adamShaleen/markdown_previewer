import React from 'react';
import './EditorTextArea.css';

function EditorTextArea(props) {
    return(
      <textarea id="editor">{props.rawTextInput}</textarea>
    )
}

export default EditorTextArea;
