import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import './header.css';
import logo from './logo.svg';

class Header extends React.Component {
     constructor(){
        super();
        this.state = {
            search: ''
        }
    }

     clearSearch = () => { // clear search input
        if(this.state.search !== ''){
            this.setState({ search: '' }, () => { //did this because the normal setState updates state with 1 char delay.
                this.props.sendSearchState(this.state.search);
            }); // send state in Articles component
        }
        
    }
    
    
    
    sendSearchState = (e) => { // send state in Articles component
        this.setState({ search: e.target.value }, () => { //did this because the normal setState updates state with 1 char delay. 
            this.props.sendSearchState(this.state.search);
        }); // send state in Articles component
    } 

    render(){
        
    return(
      
        <div className="header">
            <div className="entireLogo"><div className ="logo">My Blog in</div> <img alt="logo" className="App-logo" src={logo} /></div>
            <ul className ="menu">
                <li className ="menuItem1"><Link to='/'><FontAwesome name="home"/> Home</Link></li>
                <li className ="menuItem1"><Link to='/about'><FontAwesome name="info"/> About</Link></li>
                
                <li className ="menuItem2"><Link to='/add-article'><FontAwesome name="plus"/>  Add article</Link></li>
                <li className ="menuItem3"><input 
                        value = {this.state.search}
                        onChange={this.sendSearchState}
                        className ="searchInput"
                        type="text"  
                        autoComplete="off"
                        placeholder="Search"  
                    /><button  onClick = {this.clearSearch} className="clearSearch" type="button"><FontAwesome name="times-circle"/></button></li>
            </ul>
          
        </div>
    
    );
}
}

export default Header