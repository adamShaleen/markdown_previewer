import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Editor from './Editor';
import Preview from './Preview';
import marked from 'marked';
import PLACEHOLDER_TEXT from './PlaceHolderText.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawTextInput: PLACEHOLDER_TEXT,
            markdown: PLACEHOLDER_TEXT
        }

        this.getMarkdown = this.getMarkdown.bind(this);
    }

    getMarkdown() {
        let rawMarkdown = marked(this.state.markdown, {sanitize: true});
        return {__html: rawMarkdown};
    }

    render() {
        return (
            <div className="App">
                <Editor rawTextInput={this.state.rawTextInput}/>
                <Preview markdown={this.state.markdown}/>
            </div>
        );
    }
}

export default App;

// data flow: raw text input from editor gets passed to preview
// and then gets passed to rendered preview to convert the text to
// markup and display in the div container


// User Story #1: I can see a textarea element with a corresponding id="editor".

// User Story #2: I can see an element with a corresponding id="preview".

// User Story #3: When I enter text into the #editor element,
//the #preview element is updated as I type to display the
//content of the textarea.

// User Story #4: When I enter GitHub flavored markdown into the
//#editor element, the text is rendered as HTML in the #preview element
//as I type (HINT: You don't need to parse Markdown yourself -
//you can import the Marked library for this:
//https://cdnjs.com/libraries/marked).

// User Story #5: When my markdown previewer first loads, the default
//text in the #editor field should contain valid markdown that
//represents at least one of each of the following elements: a
//header (H1 size), a sub header (H2 size), a link, inline code, a
//code block, a list item, a blockquote, an image, and bolded text.

// User Story #6: When my markdown previewer first loads, the
//default markdown in the #editor field should be rendered as HTML
//in the #preview element.
