import React from 'react'
import FontAwesome from 'react-fontawesome';
import './singlepagearticle.css';
import { Link } from 'react-router-dom';

class SinglePageArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = { //get entire object properties from Article component to send them again to Edit component
            title: this.props.location.state.singleTitle,
            date: this.props.location.state.singleDate,
            article: this.props.location.state.singleText,
            key: this.props.location.state.key,
            object: this.props.location.state.object,
            array: this.props.location.state.array,
        }
    }

   
    onClickDelete = () => { //used for second delete button (not the Delete Component)
        const splicedArray = this.state.array;
        splicedArray.splice(this.state.key, 1);
        this.setState({
            array: splicedArray
        });
    }

    render(){
        return (
            
            <div className="SinglePageContainer">
                <Link to='/'><button className="buttonDelete" onClick={this.onClickDelete} type="button"><FontAwesome name="trash-o"/></button></Link>
                <Link 
                    to={{
                        pathname: "/edit", // sending the entire object properties to Edit comp. as location.prop
                        state: {editTitle: this.state.title,
                                editDate: this.state.date,
                                editArticle: this.state.article,
                                editKey: this.state.key,
                                editArray: this.state.array,
                                editObject: this.state.object
                        }
                    }}>
                    <button className="buttonDelete" type="submit"><FontAwesome name="pencil"/></button>
                </Link>

                <div className="SinglePageTitle">{this.state.title}</div>
                <div className="SinglePageDate"><FontAwesome name="clock-o"/> {this.state.date}</div>
                <div className="SinglePageArticle"> {this.state.article}</div>
            </div>
        );
    }
}

export default SinglePageArticle