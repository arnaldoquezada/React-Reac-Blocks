import React,  { Component } from 'react';
import './App.scss'

class Main extends Component{
    render() {
        return <article className="main">{this.props.children}</article>
    }
}
export default Main;