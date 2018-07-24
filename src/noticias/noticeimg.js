import React, { Component } from 'react';

class NoticeImg extends Component {
  render() {
    return (
        <img src={this.props.image}/>
    );
  }
}

export default NoticeImg;