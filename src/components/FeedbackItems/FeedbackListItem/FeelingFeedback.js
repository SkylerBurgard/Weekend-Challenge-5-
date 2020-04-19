import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";

class FeelingFeedback extends Component {
    state = {
        feeling: '',
    };
}

render() {
    return (
        <div>
            <h1>Tell us how you're feeling.</h1>
        </div>
    )
};

export default connect()(FeelingFeedback);
