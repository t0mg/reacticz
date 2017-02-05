import React, { Component } from 'react';
import GenericWidget from './GenericWidget';
import './TemperatureWidget.css';

class TemperatureWidget extends Component {

  render() {
    if (this.props.humonly) {
      const humidityStatus = ((this.props.humstat === 0) ? 'Normal' : (this.props.humstat === 1) ? 'Comfortable' : (this.props.humstat === 2) ? 'Dry' : 'Wet');
      return (
      <GenericWidget class="TemperatureWidget" icon="humidity"
        isOn={this.props.humstat > 2}
        value1={<div className="humonly">{this.props.humonly}</div>}
        value2={humidityStatus}
        {...this.props} />
      );
    }
      return (
      <GenericWidget class="TemperatureWidget" icon="sun"
        isOn={this.props.temp > 20}
        value1={<div className="temp">{this.props.temp}</div>}
        value2={this.props.hum !== undefined && <div className="hum">{this.props.hum}</div>}
        {...this.props} />
      );
  }

}

export default TemperatureWidget
