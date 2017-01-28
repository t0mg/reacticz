import React, { Component } from 'react';
import MqttClientSingleton from '../util/MqttClientSingleton'
import './MediaPlayer.css';

class MediaPlayer extends Component {

  constructor(props) {
    super(props);
    this.mqtt = new MqttClientSingleton();
  }

  handleClick = (event) => {
    if (this.props.readOnly) {
      return
    }
    const message = {
      command: 'switchlight',
      idx: this.props.idx,
      switchcmd: this.props.value === 0 ? 'On' : 'Off',
      level: 100
    };
    this.mqtt.publish(message);
  }

  getButtonStyle() {
    const theme = this.props.theme;
    if (!theme) {
      return {};
    }
    const style = {
      color: theme.textOn,
      background: theme.buttonOn
    }
    const gradient = 'repeating-linear-gradient(-45deg, _corner, _corner 20%, _bg 20%, _bg 80%, _corner 80%, _corner 100%)';
    if (this.props.pushButton) {
      style.color = theme.textMixed;
      style.background = gradient.replace(/_corner/g, theme.buttonMixed).replace(/_bg/g, theme.buttonOff);
      return style;
    }
    if (this.props.valueText === "Mixed") {
      style.color = theme.textMixed;
      style.background = gradient.replace(/_corner/g, theme.buttonOn).replace(/_bg/g, theme.buttonOff);
    }
    if (this.props.valueText === "Off" || this.props.value === 0) {
      style.color = theme.textOff;
      style.background =  theme.buttonOff;
    }
    return style;
  }

  render() {
    const valueText = this.props.valueText || (this.props.value === 0 ? 'Off' : 'On');
    return (
	  <span><button className="switch" style={this.getButtonStyle()} onClick={this.handleClick} title={valueText}>{this.props.label}<br/><i className="playing">{this.props.playing}</i></button></span>
    );
  }

}

export default MediaPlayer
