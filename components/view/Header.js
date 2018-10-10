import NextSeo from 'next-seo';
import SEO from '../../seo/home-seo.js';

export default () => (
  <div className={'nav nav-main'}>
    <NextSeo config={SEO}></NextSeo>
    <nav className="top-layer">
        <div className="g-index-head">
          <div className="top-menu">
            <div>
              <ul className="menu-nav">
                <li className="login elastic">
                  <a rel="nofollow" data-toggle="modal" data-target="#shortcut-login" className="down" href="https://user.wanshifu.com/login">登录</a>
                  <ul>
                    <li><a rel="nofollow" href="https://user.wanshifu.com/login">用户登录</a></li>
                    <li><a rel="nofollow" href="http://app.wanshifu.com" target="_blank">师傅登录</a></li>
                  </ul>
                </li>
                <li className="regis elastic">
                  <a rel="nofollow" className="down" href="https://user.wanshifu.com/register">免费注册</a>
                  <ul>
                    <li><a rel="nofollow" className="down" href="https://user.wanshifu.com/register" target="_blank">用户注册</a></li>
                    <li><a rel="nofollow" href="http://app.wanshifu.com" target="_blank">师傅注册</a></li>
                  </ul>
                </li>
                <li className="name is_login hide">您好， <a id="account" href="https://user.wanshifu.com" target="_blank"></a></li>
                <li className="is_login hide"><a href="https://user.wanshifu.com/logout">退出</a></li>
                <li><a className="f-prompt" href="https://user.wanshifu.com/order" target="_blank" rel="nofollow" >交易管理</a></li>
                <li className="measseg is_login hide"><a href="https://user.wanshifu.com/message/center/page/1" target="_blank">消息<span id="msg-num"></span></a></li>
                <li className="map"><a href="http://www.wanshifu.com/Complain/mastermap">师傅地图</a> </li>
                <li className="head-submenu">
                  <a className="head-sub-lnk">服务商管理<i className="nav-arrow"></i></a>
                  <ul className="head-sub-down">
                    <li><a href="http://master.wanshifu.com">企业服务商</a></li>
                    <li><a href="https://city.wanshifu.com">城市服务商</a></li>
                    <li><a href="http://app.wanshifu.com">师傅接单易</a></li>
                  </ul>
                </li>
                <li><a target="_blank" href="http://www.wanshifu.com/helpcenter/HelpCenter">帮助中心</a></li>
              </ul>
            </div>
          </div>
          <div className="head">
            <div>
              <div className="logo clearfix" id="head_logo">
                <h1>
                  <a className="Head-logo">
                    <img src="/static/images/logoh2.png " alt="万师傅家居服务平台"/>
                  </a>
                </h1>
              </div>
              <div className="nav-link">
                <a className="active" href="http://www.wanshifu.com/">首 页</a>
                <a href="http://www.wanshifu.com/Complain/plan">解决方案</a>
                <a href="http://www.wanshifu.com/Complain/maintain">专业维修</a>
                <a id="lk-ins" href="http://www.wanshifu.com/universalbao/InAdvance">服务保障</a>
                <a href="http://www.wanshifu.com/site/orderspecial">如何找师傅<i className="New-Ioc"></i></a>
                <a href="https://user.wanshifu.com/activity/concessions" target="_blank" rel="nofollow">优惠活动<i className="sp-of"></i></a>
                <a href="http://www.wanshifu.com/about">关于我们</a>
              </div>
            </div>
          </div>
        </div>
    </nav>
  </div>
)
