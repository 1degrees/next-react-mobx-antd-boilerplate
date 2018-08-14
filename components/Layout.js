/*
 * @Author: xiao·Zhang 
 * @Date: 2018-08-09 11:03:25 
 * @Last Modified by: xiao·Zhang
 * @Last Modified time: 2018-08-13 16:42:10
 * @file: 页面布局组件
 */
import '../asserts/css/styles.less'

import React, { Component }from 'react'
import Head from 'next/head'
import Header from './Header.js'
import Footer from './Footer.js'
import { inject, observer } from 'mobx-react'

@inject('homeStore') @observer
class Layout extends Component {
  render () {
    let { children } = this.props;
    console.log("------layout-------",this.props.homeStore)
    return (
      <div>
        <Header/>
        {children}
        <Footer/>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' key="all-css"/>
        </Head>
      </div>
    )
  }
}

export default Layout;