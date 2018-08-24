import React, { Component } from 'react';

import './index.less';

class Iconfont extends Component {
  render() {
    const {
      name,
      className
    } = this.props;
    return <svg className={`icon ${className}`} aria-hidden="true">
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>;
  }
}

export default Iconfont;