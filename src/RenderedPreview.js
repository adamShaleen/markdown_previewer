import React from 'react';
import './RenderedPreview.css';
import marked from 'marked';

function RenderedPreview(props) {
    return(
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
    )
}

export default RenderedPreview;
