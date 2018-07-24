import React, { Component } from 'react';

class NoticeContent extends Component {
  render() {
    return (
        <p>{this.props.content}</p>
    );
  }
}

export default NoticeContent;