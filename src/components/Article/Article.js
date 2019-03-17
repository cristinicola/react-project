import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import { Delete } from "../";
import './article.css';
import TextTruncate from 'react-text-truncate';


class Article extends React.Component {

    render() {
        return (
            <div className="articleContainer">
                
                <Delete sendNewArrayDeleted={this.props.sendNewArrayDeleted} entireArray={this.props.entireArray} key1={this.props.key1}/>
              
                <div className="articleTitle">
                    <Link /* sending the entire object properties to SinglePageArticle comp. as location.prop */
                        to={{
                            pathname: "/" + this.props.articles.url + ':' + this.props.articles.id,
                            state: {singleTitle: this.props.articles.title,
                                    singleDate: this.props.articles.date,
                                    singleText: this.props.articles.text, 
                                    key: this.props.key1,
                                    array: this.props.entireArray,
                                    object: this.props.articles
                            }
                        }}>
                        {this.props.articles.title}
                    </Link>
                </div>
                
                <div className="articleDate"><FontAwesome name="clock-o"/> {this.props.articles.date}</div>
                    <TextTruncate
                        className="articleTruncate"
                        line={1}
                        truncateText="…"
                        text={this.props.articles.text}
                    />
            </div>
        );
    }
}  
  
export default Article