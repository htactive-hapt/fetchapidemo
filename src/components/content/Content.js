import React, { Component } from 'react'
import Service from './services/Service'
import Commitment from './commitment/Commitment'
import About from './abouthtactive/About';
export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    icon: "fa fa-laptop",
                    card_title: "Web Applications",
                    card_content: "Design and develop web applications, hosting service, domain, SEO.",
                    button: "READ MORE"
                },
                {
                    icon: "fa fa-mobile",
                    card_title: "Mobile Applications",
                    card_content: "Design and develop mobile applications, publish and app store optimization.",
                    button: "READ MORE"
                },
                {
                    icon: "fa fa-gamepad",
                    card_title: "Mobile Games",
                    card_content: "Design and develop mobile games, publish and app store optimization.",
                    button: "READ MORE"
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <Commitment />
                <Service data={this.state.data} />
                <About/>
            </div>
        )
    }
}
