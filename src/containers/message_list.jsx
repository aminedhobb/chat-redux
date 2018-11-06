import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from './message.jsx';
import MessageForm from './message_form.jsx';
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    let key = -1;

    return(
      <div className="messages">
        {this.props.messages.map((message) => {
            key += 1;
            return (<Message key={key} message={message} />);
          })}
        <MessageForm />
      </div> 
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
