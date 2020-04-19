import React, { Component } from "react";
import { connect } from "react-redux";

class CommentFeedback extends Component {
    state = {
        comment: "",
    };
    onInputChange = () => (event) => {
        this.setState(
            {
                comment: event.target.value,
            },
            () => {
                console.log(this.state);
            }
        );
    };

    onCommentClick = (event) => {
        this.props.dispatch({
            type: "SET_COMMENT_FEEDBACK",
            payload: this.state,
        });
        this.props.history.push("/review");
    };

    render() {
        return (
            <div>
                <h1>Addition comments and feelings.</h1>
                <div>
                    <input type="text" onChange={this.onInputChange("comments")}> </input>
                    <button onClick={this.onCommentsClick}> Next </button>
                </div>
            </div>
        );
    }
}


export default connect()(CommentFeedback);