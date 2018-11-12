import React from 'react';
import marked from 'marked';

function RenderedPreview(props) {
    return(
        <div id="preview" dangerouslySetInnerHTML={
            {__html: marked(props.input, {sanitize: true, gfm: true, breaks: true})}
        } />
    )
}

export default RenderedPreview;
