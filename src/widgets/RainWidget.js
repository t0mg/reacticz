import React, { Component } from 'react';
import GenericWidget from './GenericWidget';
import './RainWidget.css';

class RainWidget extends Component {

  render() {
    return (
      <GenericWidget class="RainWidget" icon="cloud"
          isOn={this.props.rain > 0}
          value1={<div className="rain">{this.props.rain}</div>}
          value2={<div className="rate">{this.props.rate}</div>}
          {...this.props} />
    );
  }

}

export default RainWidget
