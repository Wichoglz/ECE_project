import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import imagen1 from './encabezado/imagen1.js';
import './mainpage.css';


class Mainpage extends Component {
  render() {
    return (
      <div>
      		<imagen1
      			image = {this.props.image}
      		/>
      </div>
    );
  }
}

export default Mainpage;