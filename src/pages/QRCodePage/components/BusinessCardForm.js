import React, { Component } from 'react';
import { Input } from 'antd';

export class BusinessCardForm extends Component {
  state = {
    renderAs: 'svg',
    inputText: '',
    qrCodeBgColor: '#FFF',
    qrCodeFgColor: '#000',
  };

  handleLinkChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  render() {
    const { inputText, renderAs, qrCodeBgColor, qrCodeFgColor } = this.state;
    const str =
      'BEGIN:VCARD\r\n' +
      'VERSION:4.0\r\n' +
      'N:Doe;Jonathan;;Mr;\r\n' +
      'FN:John Doe\r\n' +
      'END:VCARD\r\n';
    return (
      <Input
        onChange={this.handleLinkChange}
        defaultValue="mysite"
        value={inputText}
      />
    );
  }
}
