import React from 'react';
import Header from './Header';
import RenderedPreview from './RenderedPreview';

function Preview(props) {

    const PREVIEW_HEADER = "Preview"
    return(
        <div>
            <Header title={PREVIEW_HEADER} />
            <RenderedPreview markdown={props.markdown}/>
        </div>
    )
}

export default Preview;
