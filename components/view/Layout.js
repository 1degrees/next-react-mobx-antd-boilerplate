/*
 * @Author: xiao·Zhang 
 * @Date: 2018-08-09 11:03:25 
 * @Last Modified by: xiao·Zhang
 * @Last Modified time: 2018-10-10 11:48:59
 * @file: 页面布局组件
 */

import React, { Component }from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import OrderAndKefu from '../order-kefu'

import '../../asserts/css/styles.less'
// @inject('homeStore') @observer
class Layout extends Component {
  render () {
    let { children } = this.props;
    return (
      <div>
        <Header/>
        <OrderAndKefu/>
        {children}
        <Footer/>
      </div>
    )
  }
}

export default Layout;