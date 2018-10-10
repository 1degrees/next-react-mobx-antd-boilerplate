/*
 * @Author: xiao·Zhang 
 * @Date: 2018-08-29 14:20:01 
 * @Last Modified by: xiao·Zhang
 * @Last Modified time: 2018-10-10 13:52:42
 * @file: 全局引入样式，外部组件库页面 (经测试不存react在生命周期)
 */

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link href="http://www.wanshifu.com/assets/images/favicon.ico" rel="shortcut icon"></link>
          <link href="/static/css/jquery.fullPage.css" rel="stylesheet"></link>
          <script src="/static/js/jquery-1.8.3.min.js"/>
          <script src="/static/js/jquery.fullPage.min.js"/>
          <script async src="/static/js/kefu.js"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}