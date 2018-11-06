import React, { Component } from 'react';

class Message extends Component {

  render() {
    return (
      <div className="message">
        <h5>{this.props.message.author}</h5>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
