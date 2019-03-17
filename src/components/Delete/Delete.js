import React from 'react'
import FontAwesome from 'react-fontawesome';
import './delete.css';


class Delete extends React.Component {
    constructor(props){
        super(props);   
        this.state = {
            deleteArray: this.props.entireArray
        };
    }
  
    onClickDelete = () => {
        let splicedArray = this.state.deleteArray;
        splicedArray.splice(this.props.key1, 1);
        this.setState({
            deleteArray: splicedArray
        });
        this.props.sendNewArrayDeleted(this.state.deleteArray); //send array to Articles component to render in real time/change state when delete button is pressed
    } 
  
    render() {
        return (
         
            <button className="buttonDelete" onClick={this.onClickDelete} type="button"><FontAwesome name="trash-o"/></button>
            
        );
    }
}
    
export default Delete