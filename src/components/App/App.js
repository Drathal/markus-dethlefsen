import React, { Component } from 'react';
import './App.css';
import SiteData from '../../data.json'
import Menu from '../Menu';
import Content from '../Content';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu data={SiteData.menu}/>
                <Content data={SiteData.menu}/>
            </div>
        );
    }
}

export default App;
