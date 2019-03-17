import React from 'react'
import { Article } from "../";


class Articles extends React.Component {
    constructor(props){
        super(props);   
        this.state = { myArray: this.props.finalArray
        };
    }
    
    getNewArrayDeleted = (dataArray) => {
        this.setState({myArray: dataArray})
    }

    
    render() {

        return ( 
            <div>
                {this.state.myArray.map((article, i)=>{
                    // check if searched value can be found in title or article
                    if ((article.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1) || (article.text.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1)) {
                        return (
                            <Article sendNewArrayDeleted={this.getNewArrayDeleted} entireArray={this.state.myArray} key1={i} key={i} articles={this.state.myArray[i]} />
                    );
                    } return false;

                    
                })}       
            </div> 
        );
    }
}


export default Articles