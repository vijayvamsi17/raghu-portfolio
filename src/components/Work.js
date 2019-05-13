import React, { Component } from 'react';
import '../styles/work.scss';
import image1 from '../images/img1.jpg';

class Work extends Component {



    render() {

        return (

            <div className="workContainer">

                <div className="service-head text-center">
                    <h4>What did I do?</h4>
                    <h3>MY <span>Work</span></h3>
                    <span className="border one"></span>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <div className="textBg"></div>
                            <img src={image1} alt="image1" />
                            <div className="overlay">
                                <span>overlay content</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <div className="textBg"></div>
                            <img src={image1} alt="image1" />
                            <div className="overlay">
                                <span>overlay content</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <div className="textBg"></div>
                            <img src={image1} alt="image1" />
                            <div className="overlay">
                                <span>overlay content</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <div className="textBg"></div>
                            <img src={image1} alt="image1" />
                            <div className="overlay">
                                <span>overlay content</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <div className="textBg"></div>
                            <img src={image1} alt="image1" />
                            <div className="overlay">
                                <span>overlay content</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imageBox img-container">
                            <div className="textBg"></div>
                            <img src={image1} alt="image1" />
                            <div className="overlay">
                                <span>overlay content</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
