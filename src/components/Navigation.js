import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../styles/navigation.scss';

class Navigation extends Component {

    const 

    constructor(props) {
        super(props)
        this.state = {
            routes: {
                home: true,
                work: false,
                experience: false,
                photography: false
            },
        }
    }

    componentDidMount = (props) => {
        this.selectedLink(this.props.location.pathname.slice(1));
    }

    selectedLink = (link) => {
        if(link == 'home') {
            this.setState({
                ...this.state,
                routes: {
                    home: true,
                    work: false,
                    experience: false,
                    photography: false
                }
            })
        }else if(link == 'work') {
            this.setState({
                ...this.state,
                routes: {
                    home: false,
                    work: true,
                    experience: false,
                    photography: false
                }
            })
        }else if(link == 'experience') {
            this.setState({
                ...this.state,
                routes: {
                    home: false,
                    work: false,
                    experience: true,
                    photography: false
                }
            })
        }else if(link == 'photography') {
            this.setState({
                ...this.state,
                routes: {
                    home: false,
                    work: false,
                    experience: false,
                    photography: true
                }
            })
        }
    }



    render() {

        return (

            <div className="navContainer">

                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                        </ul>

                        <ul className="nav justify-content-end">
                            <li className={this.state.routes.home ? "nav-item current" : "nav-item"} onClick={() => this.selectedLink("home")}>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className={this.state.routes.work ? "nav-item current" : "nav-item"} onClick={() => this.selectedLink("work")}>
                                <NavLink className="nav-link" to="/work">Work</NavLink>
                            </li>
                            <li className={this.state.routes.experience ? "nav-item current" : "nav-item"} onClick={() => this.selectedLink("experience")}>
                                <NavLink className="nav-link" to="/experience">Experience</NavLink>
                            </li>
                            <li className={this.state.routes.photography ? "nav-item current" : "nav-item"} onClick={() => this.selectedLink("photography")}>
                                <NavLink className="nav-link" to="/photography">Photography</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Navigation);
