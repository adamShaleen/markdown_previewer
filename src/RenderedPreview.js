import React, { Component } from 'react';
import './RenderedPreview.css';

class RenderedPreview extends Component {
    render() {
        return(
            <div id="preview">{this.props.markdown}</div>
        )
    }
}

export default RenderedPreview;