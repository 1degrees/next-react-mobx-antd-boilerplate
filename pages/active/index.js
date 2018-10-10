import React, { Component }from 'react'
import Router, { withRouter } from 'next/router'
import Layout from '@components/view/Layout.js'

class Index extends Component {
  static getInitialProps({ req, res, err }) {
    console.log('第二个页面getInitialProps')
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <Layout>
        <div className="container" style={{textAlign:'center',lineHeight:'200px'}}>
            <div>活动页面</div>
        </div>
      </Layout>
    )
  }
}

export default withRouter(Index)