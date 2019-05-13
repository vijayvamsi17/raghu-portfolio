import React, { Component } from 'react';
import '../styles/experience.scss';
import { FaBriefcase } from 'react-icons/fa';

class Experience extends Component {



    render() {

        return (

            <div className="experienceContainer container">
                <div className="service-head text-center">
                    <h4>What did I do?</h4>
                    <h3>MY <span>Experience</span></h3>
                    <span className="border one"></span>
                </div>
                <div className="time-main w3l-agile">
                    <div className="row">
                        <div className="col-md-6 year-info">
                            <ul className="year">
                                <li>2019</li>
                                <li>2018</li>
                                <li>2017</li>
                                <li>2016</li>
                                <li>2015</li>
                                <div className="clearfix"></div>
                            </ul>
                        </div>
                        <ul className="col-md-6 timeline">
                            <li>
                                <div className="timeline-badge info">
                                    <FaBriefcase />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Company Name</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Lorem ipsum dolor sit amet.Itaque was selected for these matters to this is obliged to heed a wise man, in order that he rejects pleasures to secure other greater or else he endures pains, or </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge primary">
                                <FaBriefcase />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Company Name</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Lorem ipsum dolor sit amet.Itaque was selected for these matters to this is obliged to heed a wise man, in order that he rejects pleasures to secure other greater or else he endures pains, or </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge danger">
                                <FaBriefcase />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Company Name</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Lorem ipsum dolor sit amet.Itaque was selected for these matters to this is obliged to heed a wise man, in order that he rejects pleasures to secure other greater or else he endures pains, or </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge success">
                                <FaBriefcase />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Company Name</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Lorem ipsum dolor sit amet.Itaque was selected for these matters to this is obliged to heed a wise man, in order that he rejects pleasures to secure other greater or else he endures pains, or </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge pass">
                                <FaBriefcase />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Company Name</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Lorem ipsum dolor sit amet.Itaque was selected for these matters to this is obliged to heed a wise man, in order that he rejects pleasures to secure other greater or else he endures pains, or </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
