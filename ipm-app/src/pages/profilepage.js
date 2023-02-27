import React from 'react';

// the function loads the selected information of the selected project 
export function LoadProjectProfile(props){
    const imgurl = props.imgurl; 
    const name = props.name; 
    const description = props.description
    const className = props.course; 
    const page = props.page; 
    
    // need to select the image and load 
    const projectImg = (
        <div className="col">
            <img src={"img/sample_profile.png"}  className="rounded float-start" alt="Responsive img"></img>
        </div>
    );

    // need to select the project information in tag into list form 
    
    const projectInformation = (
        <div>
        <ul>
            <h2>Project Title: {name} </h2>
            <li>Project Description
                <p>{description}</p>
            </li>
            <li>Class: {className} </li>
            <li>Quarter: </li>
            <li>Team members: </li>
            <li>Github Link: 
                <a href = {page}></a>
            </li>
        </ul>
        </div>
    );

    // comment box, need to make it interactive (when submit is hit, clear the comment box)
    const commentBox = (
            <div className="commentColumn">
                <h3>Comments!</h3>
                    <h5>What are your thoughts on the project?</h5>
                    <textarea className="comment" rows="5" cols="70" placeholder="Write out your comment!"></textarea>
                    <div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
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
                <div className="row justify-content-evenly">
                    {projectInformation}
                </div>
            </div>
        </div>

        <div className="container">
            {commentBox}
        </div>
        </div>
    )
}