import React, { Component } from 'react';
import { Header, Main, Footer } from "./components";
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            search:''
        }
    }

    getSearchState = (data) => {
        this.setState({search: data});
    }


    render() {
        
        return (
            <div className="wrapper">
                <Header sendSearchState = {this.getSearchState} />
                <Main search={this.state.search} />
                <Footer />
            </div>
        );
    }
}

export default App

