import React from 'react';
import Header from './Header';
import RenderedPreview from './RenderedPreview';
import marked from 'marked';
import PLACEHOLDER_TEXT from './PlaceHolderText.js';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: PLACEHOLDER_TEXT
        }
        this.getMarkdown = this.getMarkdown.bind(this);
    }

    getMarkdown() {
        let rawMarkup = marked(PLACEHOLDER_TEXT, {sanitize: true});
        return {__html: rawMarkup};
    }

    render() {
        const PREVIEW_HEADER = "Preview"
        return(
          <div>
            <Header title={PREVIEW_HEADER} />
            <RenderedPreview markdown={this.getMarkdown()}/>
          </div>
        )
    }
}

export default Preview;
