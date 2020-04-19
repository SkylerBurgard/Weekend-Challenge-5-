import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";

class ContentFeedback extends Component {
    state = {
        submit: "",
    };

    onInputChange = (event) => (input) => {
        console.log(event)
        this.setState(
            {
                [input]: event.target.value,
            },
        );
    };

}

onContentClick = (event) => {
    this.PaymentResponse.dispatch({
        type: "SET_UNDERSTANDING_FEEDBACK",
        payload: this.state,
    })
};

render() {
    return (
        <div>
            <h1> How well do you understand this weeks content?</h1>

            <div>
                <input type="text" onChange={this.onInputChange("content")}></input>
                <button onClick={this.onContentClick}> Next </button>
            </div>
        </div>
    );
}




export default connect()(ContentFeedback);