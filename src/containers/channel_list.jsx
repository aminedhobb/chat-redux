import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectChannel, setMessages } from '../actions';

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.setMessages(channel);
  }

  render() {    
    return(
      <div className="channels">
        <div>
          <h2> Redux Chat </h2>
        </div>
        {this.props.channels.map((channel) => {
          let channelClass = "channel";
          if (channel === this.props.selectedChannel) {
            channelClass += " selected";
          };
          return (
            <h3 
              key={channel} 
              className={channelClass} 
              onClick={() => this.handleClick(channel)}
            > 
              #{channel} 
            </h3>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, setMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
