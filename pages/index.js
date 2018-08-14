import React, { Component }from 'react'
import { WithStore } from '../stores';
import Layout from '../components/Layout.js'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Router, { withRouter } from 'next/router'

const ReactFullpage = dynamic(import('@fullpage/react-fullpage'));

const fullpageOpt = {
  anchors: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
  autoScrolling: true,
}

let init = true;

const FullpageWrapper = props => (
  <ReactFullpage {...props} render={({ state, fullpageApi }) => {
      return (
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
      );
    }}
  />
);

class Index extends Component {
  static getInitialProps ({ req }) {
    return {isServer: !!req}
  }

  constructor (props) {
    super(props)
  }

  componentDidMount(){
  }

  render() {
    return (
      <WithStore>
        <Layout>
          <FullpageWrapper {...fullpageOpt} />
        </Layout>
      </WithStore>
    )
  }
}

export default withRouter(Index)