import React, { Component } from 'react';
import { Input, Icon, Row, Col, Switch, Popover, Button } from 'antd';
import { ChromePicker } from 'react-color';
import { ResizableBox } from 'react-resizable';
import QRCode from 'qrcode.react';

const Search = Input.Search;

export class QrCodeRender extends Component {
  state = {
    renderAs: 'svg',
    qrCodeBgColor: '#FFF',
    qrCodeFgColor: '#000',
    qrCodeSize: 150,
  };

  handleSwitchChange = (e) => {
    console.log(e);
    this.setState({
      renderAs: !e ? 'svg' : ' canvas',
    });
  };

  handeBgColorChange = (color) => {
    this.setState({ qrCodeBgColor: color.hex });
  };

  handeFgColorChange = (color) => {
    this.setState({ qrCodeFgColor: color.hex });
  };

  render() {
    const { renderAs, qrCodeBgColor, qrCodeFgColor, qrCodeSize } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Switch
            checkedChildren="cvs"
            unCheckedChildren="svg"
            defaultChecked
            onChange={this.handleSwitchChange}
          />


          <Popover
            trigger="click"
            overlayClassName="color-picker-container"
            content={
              <ChromePicker
                color={qrCodeBgColor}
                onChangeComplete={this.handeBgColorChange}
              />
            }>
            <Search
              placeholder="input search text"
              value={qrCodeBgColor}
              onSearch={(value) => console.log(value)}
              enterButton={<Icon type="reload" />}
            />
          </Popover>
          <Popover
            overlayClassName="color-picker-container"
            trigger="click"
            content={
              <ChromePicker
                color={qrCodeFgColor}
                onChangeComplete={this.handeFgColorChange}
              />
            }>
            <Search
              placeholder="input search text"
              value={qrCodeFgColor}
              onSearch={(value) => console.log(value)}
              enterButton={<Icon type="reload" />}
            />
          </Popover>


        </Col>
        <Col span={12} style={{ height: '100%' }}>
          <Row type="flex" justify="center" align="middle">
            <Col span={24}>
              <ResizableBox
                onResize={(e, data) =>
                  this.setState({ qrCodeSize: data.size.width })
                }
                width={qrCodeSize}
                height={qrCodeSize}
                lockAspectRatio
                minConstraints={[100, 100]}
                maxConstraints={[600, 600]}>
                <QRCode
                  size={qrCodeSize}
                  bgColor={qrCodeBgColor}
                  fgColor={qrCodeFgColor}
                  level="H"
                  renderAs={renderAs}
                  value={'furkan'}
                />
              </ResizableBox>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
