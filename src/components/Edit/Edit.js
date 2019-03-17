import React from 'react'
import './edit.css';

class Edit extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            passedArray: this.props.location.state.editArray,
            currentPassedObject: this.props.location.state.editObject,
            currentKey: this.props.location.state.editKey,
            editTitle: this.props.location.state.editTitle,
            editArticle: this.props.location.state.editArticle,
            editDate: this.props.location.state.editDate,
            editUrl: this.props.location.state.editObject.url,
            alert: '',
            color: ''
        };
    }

    onInputChange = (e) => {
        this.setState({
            editTitle: e.target.value,
            editUrl: e.target.value.toLowerCase().replace(/ +(?=)/g,'-')
        });
    }
 
    onTextChange = (e) => {
        this.setState({
          editArticle: e.target.value,
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        if((this.state.editTitle.length > 0) && (this.state.editArticle.length > 0)){

            if((this.state.editTitle !== this.state.currentPassedObject.title) || (this.state.editArticle !== this.state.currentPassedObject.text)){
                //update object only if the title or the content are modified. 
                let object = this.state.currentPassedObject
                object = {
                    id: this.state.currentKey,
                    url: this.state.editUrl,
                    title: this.state.editTitle,
                    text: this.state.editArticle,
                    date: this.state.editDate
                }

                this.setState({object});

                let splicedArray = this.state.passedArray;
                let currentKey = this.state.currentKey; //keep the key for the second splice, where we add the new object
                this.state.passedArray.splice(this.state.currentKey, 1); //splice current object, where we edit
                this.state.passedArray.splice(currentKey, 0, object) //add the new object in array, in the current position, logged by currentkey
                this.setState({
                    editedArray: splicedArray,
                    alert: "Article updated!",
                    color: '#00d8ff'
                });
            } else {
                this.setState({ 
                    alert: "Article is unchanged.",
                    color: '#333'
                });
            }

        } else {
            this.setState({
                alert: "Please complete all fields!",
                color: '#ff0000'
            });
        }

    } 
    
    render() {

        return (

            <form className="form">
                <div style={{color: this.state.color}} className="alert">{this.state.alert}</div>
                <label className="forInputLabel">
                    Article title: <br/>
                    <input 
                        value={this.state.editTitle}
                        onChange={this.onInputChange}
                        className="forInput" 
                        type="text" 
                        autoComplete="off"
                        />
                </label>
                <br/>
                <label className="forInputLabel">
                    Article content: <div style={{float: 'right', fontSize: 14}}>{this.state.editArticle.length} chars</div><br/>
                    <textarea
                        value={this.state.editArticle}
                        onChange={this.onTextChange} 
                        className="forInput" 
                        rows="15" 
                        cols="50" 
                    />
                </label>
                <br/>
                <button onClick={this.handleSubmit} className="buttonPublish"  type="submit">
                    Update article
                </button>
            </form>
        )
    }
}

export default Edit