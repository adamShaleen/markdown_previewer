import React, { Component } from 'react';
import './style.css';
import Header from './Header';
import RenderedPreview from './RenderedPreview';
import PLACEHOLDER_TEXT from './PlaceHolderText.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state= ({
            input: PLACEHOLDER_TEXT
        });

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    render() {
        return (
            <div className="App">

                <div id="editor_container">
                    <Header title="Editor" />
                    <textarea id="editor"
                        onChange={this.handleChange}
                        value={this.state.input}/>
                </div>

                <div id="preview_container">
                    <Header title="Preview" />
                    <RenderedPreview id="preview" input={this.state.input}/>
                </div>

            </div>
        );
    }
}

export default App;
