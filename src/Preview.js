import React from 'react';
import Header from './Header';
import RenderedPreview from './RenderedPreview';

function Preview() {
    const PREVIEW_HEADER = "Preview"
    return(
      <div>
        <Header title={PREVIEW_HEADER} />
        <RenderedPreview />
      </div>
    )
}

export default Preview;
