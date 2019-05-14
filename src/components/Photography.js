import React, { Component } from 'react';
import '../styles/photography.scss';
import image1 from '../images/img1.jpg';

class Photography extends Component {



    render() {

        return (

            <div className="photographyContainer container">
                <div className="service-head text-center">
                    <h4>What did I do?</h4>
                    <h3>MY <span>Photography</span></h3>
                    <span className="border one"></span>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <img src={image1} alt="image1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <img src={image1} alt="image1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <img src={image1} alt="image1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <img src={image1} alt="image1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <img src={image1} alt="image1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <img src={image1} alt="image1" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photography;
