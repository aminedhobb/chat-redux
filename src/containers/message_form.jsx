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

 


  handleSubmit = (event) => {
    if (this.state.value) {
      this.props.createMessage(this.props.userName, this.state.value, this.props.selectedChannel);
      this.setState({value: ''});
    }
  }

  render() {
    return(
      <div className="message-form form-row">
        <div className="col-xs-10">
          <input className="form-control" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className="col-xs-2">
          <button type="button" className="btn btn-danger" onClick={this.handleSubmit} >Send</button> 
        </div>
      </div>
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
