import React from 'react'
import './about.css';

const About = () => {

    return (
        <div className="aboutContainer">   
            <div className="aboutTitle">About my project</div>
            <div className="aboutText">This is a demo blog project created entirely in React. In this project you can find: 
            <br></br>- articles list, 
            <br></br>- single article page, 
            <br></br>- articles hyperlinks based on name and id, 
            <br></br>- real time delete articles, 
            <br></br>- real time search articles, 
            <br></br>- add article, 
            <br></br>- edit article with check on changes,
            <br></br>- others;</div>
        </div>
    );
}
  
export default About