import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import axios from 'services/axios';

import './index.less';

class Home extends Component {
  componentDidMount() {
    axios('/order/finance/company/findAllCompany1', {
      method: 'get'
    }).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div className="home">
        <Button type="primary">primary</Button>
        <div className="test-demo"></div>
      </div>
    );
  }
}

export default Home;
