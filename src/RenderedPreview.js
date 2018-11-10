import React from 'react';
import './RenderedPreview.css';

function RenderedPreview(props) {
    return(
        <div id="preview">{props.markdown}</div>
    )
}

export default RenderedPreview;
