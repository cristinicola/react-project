import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Articles, NewArticle, About, SinglePageArticle, Edit } from "../";
import { demo } from "./demoArticles"

class Main extends React.Component {
    constructor(){
        super();   
        this.state = {
            array: demo
        };
    }

    render() {
        return ( 

            <main >
                <Switch >
                    <Route path = '/about' component = { About }/>
                    <Route path ='/:url::id' component = { SinglePageArticle }/>
                    <Route path ='/edit' component = { Edit }/>
                    <Route path='/' exact render={ (props) => (<Articles search={this.props.search}  finalArray={this.state.array}/>) } /> {/* sending array to Articles comp, as prop, to map/render */}
                    <Route path='/add-article' render={ (props) => (<NewArticle array={this.state.array} />) } />  {/* sending array to New Article comp, where we push another object */}  
                </Switch> 
            </main>
            
        );
    }
}

export default Main