import React, { Component }from 'react'
import { WithStore } from '../../stores';
import Router, { withRouter } from 'next/router'
import Layout from '../../components/Layout.js'

class Index extends Component {
  static getInitialProps({ req, res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <WithStore>
        <Layout>
          <div className="container" style={{textAlign:'center',lineHeight:'200px'}}>
              <div>活动页面</div>
          </div>
        </Layout>
      </WithStore>
    )
  }
}

export default withRouter(Index)