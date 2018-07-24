import React, { Component } from 'react';

class NoticeTitle extends Component {
  render() {
    return (
      <div>
        <p>{this.props.displayName}</p>
      </div>
    );
  }
}

export default NoticeTitle;