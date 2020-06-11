import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './about.css'
import hands from '../../../assets/handss.png'
export default class About extends Component {
    render() {
        return (
            <div className="about">
                <Row className="abouthtactive">
                    <Col span={24}>
                        <p className="about-title text-center">ABOUT HT ACTIVE</p>
                        <div className="separator">
                        </div>
                        <p className="lead text-center">HT Active is the team of Young & Brilliant people. We will help and support all you need about Software Solutions.
                            We’re developers, designers, support specialists and gamers. We have all you needs.</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={3}>

                    </Col>
                    <Col span={9}>
                        <Row>
                            <h2>Meet the team - HT Active</h2>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <img src={hands} alt=""/>
                            </Col>
                            <Col span={12}>
                                <p>We work on the services, product and comunication. We love what we do, and who we do it with. To HT Active, all customers are friends.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={9}>
                        rewg
                    </Col>
                    <Col span={3}>

                    </Col>
                </Row>
            </div>
        )
    }
}
