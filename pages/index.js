import React, { Component }from 'react'
import Layout from '@components/view/Layout'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Router, { withRouter } from 'next/router'
import { inject, observer } from 'mobx-react';
import config from '../config'

@inject('homeStore')
@observer
class Index extends Component {
  static getInitialProps ({ req }) {
    console.log('------getInitialProps--Index-----')
    return {isServer: !!req}
  }

  constructor (props) {
    console.log('------constructor--Index-----')
    super(props)
  }

  componentDidMount(){
    let timer = setInterval(() => {
      if($ && $.fn.fullpage) {
        $('#fullpage-wrapper').fullpage({
	        anchors:['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
          autoScrolling:true,
        });
        clearInterval(timer);
      }
    }, 200)
  }

  render() {
    return (
        <Layout>
          <div id="fullpage-wrapper" className="container">
            <div className="section page-1">
              <Link href={{ pathname: '/active', query: { name: 'Zeit' } }}>
                <li className="link"><span>活动页----真实href</span></li>
              </Link>
              <Link href={{ pathname: '/active', query: { name: 'Zeit' } }} as={{ pathname: '/active/Zeit' }}>
                <li className="link"><span>活动页----asPath</span></li>
              </Link>
            </div>
            <div className="section page-2">
            </div>
            <div className="section page-3">
            </div>
            <div className="section page-4">
            </div>
            <div className="section page-5">
            </div>
            <div className="section page-6">
            </div>
          </div>
        </Layout>
    )
  }
}

export default withRouter(Index)