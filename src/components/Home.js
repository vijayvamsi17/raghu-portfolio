import React, { Component } from 'react';
import '../styles/home.scss';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

class Home extends Component {

    
    
    constructor(props) {
        super(props)
        const i=0;
        const words = ["I Developer", "X Designer"]
        this.state = {
            myRole: ""
        }
        this.textlooping(i, words);
    }

    textlooping = (i, words) => {
        let timer;
        // words = ["I Developer", "X Designer"];
        let word = words[i].split("");
        let _this = this;
        var loopTyping = function() {
            if (word.length > 0) {
                _this.setState({
                    myRole: _this.state.myRole += word.shift()
                })
            } else {
                _this.deletingEffect(i, words);
                return false;
            };
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    }

    deletingEffect = (i, words) => {
        let timer;
        let word = words[i].split("");
        let _this = this;
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                _this.setState({
                    myRole: word.join("")
                })
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                _this.textlooping(i, words);
                return false;
            };
            timer = setTimeout(loopDeleting, 200);
        };
        loopDeleting();
    };

    render() {

        return (

            <div className="homeContainer">
                <h1>Raghu Ram <span className="lastName">Setty</span></h1>
                <h2>U{this.state.myRole}|</h2>
                <div className="socialmedia">
                    <a><FaFacebook /></a>
                    <a><FaLinkedin /></a>
                    <a><FaTwitter /></a>
                    <a><FaGithub /></a>
                </div>
            </div>
        );
    }
}

export default Home;
