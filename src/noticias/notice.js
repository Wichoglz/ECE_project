import React, { Component } from 'react';
import NoticeImg from './noticeimg.js';
import NoticeTitle from './notice_title';
import NoticeContent from './noticeContent';


class Notice extends Component {
  render() {
    return (
      <div>
        <NoticeImg image={this.props.image} />
        <NoticeTitle
            displayName={this.props.displayName}
        />
        <NoticeContent content={this.props.content}/>
      </div>
    );
  }
}
export default Notice;