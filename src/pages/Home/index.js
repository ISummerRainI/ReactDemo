import React, { Component } from 'react';
import { Button, Toast } from 'antd-mobile';
import axios from 'services/axios';
import Iconfont from 'components/Iconfont';

import './index.less';

class IconPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testIcon: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'],
      emojiIcon: ['emoji1', 'emoji2', 'emoji3', 'emoji4', 'emoji5', 'emoji6', 'emoji7', 'emoji8']
    }
  }

  sendAjax = () => {
    axios('/test/test', {}).then(res => {
      const {
        data,
        code,
        msg
      } = res;
      if (code === 200) {
        Toast.info(data.text);
      } else {
        Toast.fail(msg);
      }
    })
  }

  render() {
    const {
      testIcon,
      emojiIcon
    } = this.state;
    return (
      <div className="home">
        <h4>普通ICON</h4>
        <div className="icon-box">
          {
            testIcon.map(item => (
              <div key={item} className="icon-content">
                <Iconfont name={item} />
              </div>
            ))
          }
        </div>
        <h4>Emoji (带颜色ICON)</h4>
        <div className="icon-box">
          {
            emojiIcon.map(item => (
              <div key={item} className="icon-content">
                <Iconfont name={item} color />
              </div>
            ))
          }
        </div>
        <br />
        <Button type="primary" onClick={this.sendAjax}>点击发送请求</Button>
      </div>
    );
  }
}

export default IconPage;
