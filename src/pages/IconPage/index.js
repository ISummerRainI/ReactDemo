import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import Iconfont from 'components/Iconfont';

class IconPage extends Component {
  render() {
    return (
      <div className="home">
        <Icon type="check-circle" />
        <Iconfont name="weixin" />
      </div>
    );
  }
}

export default IconPage;
