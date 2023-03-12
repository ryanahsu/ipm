import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import PROJECT_LIST from '../data/portfolio-projects.json'; // Projects to display


// the function loads the selected information of the selected project 
export function LoadProjectProfile(props){

    const projectNameString = useParams().projectName;
    let project =  _.find(props.projectList, {name: projectNameString.replaceAll('-', ' ')});

    const imgurl = project.imgurl; 
    const name = project.name; 
    const description = project.description
    const className = project.course; 
    const hours = project.hours; 
    const grade = project.grade;

    // need to select the image and load 
    const projectImg = (
        <div className="col">
            <img src={imgurl}  className="rounded float-start" alt="Responsive img"></img>
        </div>
    );

    // need to select the project information in tag into list form 
    
    const projectInformation = (
        <div>
            <ul>
                <h2>{name} </h2>
                <li>Description: {description}</li>
                <li>Class: {className} </li>
                <li>Hours spent: {hours}</li>
                <li>Grade Received: {grade}</li>
            </ul>
        </div>
    );
    
    const [comment, setComment] = useState('');
    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setComment('');
      };
      

    // comment box, need to make it interactive (when submit is hit, clear the comment box)
    const commentBox = (
            <div className="commentColumn">
                <h3>Comments!</h3>
                    <h5>What are your thoughts on the project?</h5>
                    <textarea className="comment" rows="5" cols="70" placeholder="Write out your comment!" value={comment} onChange={handleChange}></textarea>
                    <div>
                    <button type="submit" className="btn-lg btn-secondary" onClick={handleSubmit}>Submit</button>
                    </div>
            </div>          
    );

    // update when one 'click' the subnmit button 

    

    return (
        <div>
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col">
                        {projectImg}
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    {projectInformation}
                </div>
            </div>

            <div className="container">
                {commentBox}
            </div>
        </div>
    )
}