import React, { Component } from 'react';
import './encabezado.css';

class imagen1 extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} className="image1"/>
      </div>
    );
  }
}
export default imagen1;