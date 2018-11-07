import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createMessage } from '../actions'; 

class MessageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  componentDidMount() {
    this.messageBox.focus();
  }
 


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value) {
      this.props.createMessage(this.props.userName, this.state.value, this.props.selectedChannel);
      this.setState({value: ''});
      this.messageBox.focus();
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <div className="message-form form-row">
          <div className="col-xs-10">
            <input className="form-control" value={this.state.value} onChange={this.handleChange} ref={(input) => this.messageBox = input}/>
          </div>
          <div className="col-xs-2">
            <button type="submit" className="btn btn-danger">Send</button> 
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    messages: state.messages,
    userName: state.userName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
