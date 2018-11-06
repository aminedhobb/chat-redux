import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ChannelList extends Component {

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
          return <h3 key={channel} className={channelClass}> #{channel} </h3>
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


export default connect(mapStateToProps)(ChannelList);
