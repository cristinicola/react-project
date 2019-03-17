import React from 'react'
import './newarticle.css';

class NewArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlx: "",
            titlex: "",
            datex: "",
            articlex: "",
            newArticleArray: this.props.array,
            newArticleObject: {},
            color: ""
        };  
    }

    onInputChange = (e) => {
        const stringToday = new Date().toLocaleDateString('en-GB');
        this.setState({
            titlex: e.target.value,
            urlx: e.target.value.toLowerCase().replace(/ +(?=)/g,'-'),
            datex: stringToday
        });
    }

    onTextChange = (e) => {
        this.setState({
            articlex: e.target.value
        });
    }
   
    handleSubmit = (event) =>{
        event.preventDefault();
        if((this.state.titlex.length > 0) && (this.state.articlex.length > 0)){
            //push object in array only if the values of inputs are not empty
            let updatedArray = this.state.newArticleArray;
            let object = this.state.newArticleObject;
            object = {
                id:  this.state.newArticleArray.length,
                url: this.state.urlx,
                title: this.state.titlex,
                date: this.state.datex,
                text: this.state.articlex
            }

            
      

            updatedArray.unshift(object)

            this.setState({
                  newArticleArray: updatedArray,
                  titlex: "",
                  articlex: "",
                  alert: "Article published!",
                  color: '#00d8ff'
            });

        } else {
            this.setState({  
                alert: "Please complete all fields!",
                color: '#ff0000'
            });
        }
    }
    
    render() {
        console.log("lungime", this.state.articlex.length)
        return (

            <form className="form">
                <div style={{color: this.state.color}} className="alert">{this.state.alert}</div>
                <label className="forInputLabel">
                    Article title: <br/>
                    <input 
                        value={this.state.titlex}
                        onChange={this.onInputChange}  
                        className="forInput" 
                        type="text" 
                        name="name" 
                        autoComplete="off"
                        placeholder="Write article title here"  
                    />
                </label>
                <br/>
                <label className="forInputLabel">
                    Article content: <div style={{float: 'right', fontSize: 14}}>{this.state.articlex.length} chars</div> <br/>
                    <textarea
                        value={this.state.articlex}
                        onChange={this.onTextChange}    
                        className="forInput" 
                        rows="15" 
                        cols="50" 
                        required
                        placeholder="Write article content here" 
                    />   
                </label>
                <br/>
                <button className="buttonPublish" onClick={this.handleSubmit} type="submit">
                    Publish article
                </button>
            </form>
        )
    }
}

export default NewArticle