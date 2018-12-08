import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import API from "./../../utils/api";

class NewCarousel extends Component {
    state = {
        news: [],
    };
    componentDidMount() {
        API.getTaxpros()
            .then(res => this.setState({ news: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Carousel >
                    <div>
                        <img src="assets/2.jpeg" alt="picture1" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/2.jpeg" alt="picture2" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" alt="picture3" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
};

export default NewCarousel;