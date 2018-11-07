import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Message from './message.jsx';
import MessageForm from './message_form.jsx';
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    let key = -1;

    return(
      <div className="messages" >
        <div className="message-list" ref={(list) => this.list = list} >
          {this.props.messages.map((message) => {
              key += 1;
              return (<Message key={key} message={message} />);
            })}
        </div>
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
