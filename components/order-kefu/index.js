/*
 * @Author: xiao·Zhang 
 * @Date: 2018-08-09 11:03:25 
 * @Last Modified by: xiao·Zhang
 * @Last Modified time: 2019-01-02 10:03:24
 * @file: 快速下单 && 客服接听
 */

import React, { Component }from 'react';
import Head from 'next/head';
// import styles from './style.css';

class OrderAndKefu extends Component {
    chartCtr = () => {
        let el = document.querySelector('#v5frame'),
            style = window.getComputedStyle(el),
            isShow = !(style.display === 'none'),
            cmd = isShow ? 'hideChat' : 'showChat';
        window.V5CHAT(cmd);
    }

    render () {
        return (
            <ul className="float-menu">
                <li className="new-order">
                    <a href="">
                        <ul>
                            <li><h3>任务发布后</h3><p>3分钟内收到师傅报价</p></li>
                            <li><h3>每个任务</h3><p>平均5个报价可选择</p></li>
                            <li><h3>全国99%的地区</h3><p>任务得到完美解决</p></li>
                        </ul>
                    </a>
                </li>
                <li className="online-service">
                    <a className="onlinebtn" onClick={ this.chartCtr }></a>
                    <span id="msgNum">0</span>
                </li>
            </ul>
        )
    }
}

export default OrderAndKefu;