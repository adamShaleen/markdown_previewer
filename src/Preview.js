import React, { Component } from 'react';
import Header from './Header';
import RenderedPreview from './RenderedPreview';

class Preview extends Component {
  render() {
    const PREVIEW_HEADER = "Preview"
    return(
      <div>
        <Header title={PREVIEW_HEADER} />
        <RenderedPreview />
      </div>
    )
  }
}

export default Preview;
