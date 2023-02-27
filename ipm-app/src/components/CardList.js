import React from 'react'; // General React import

import { Link } from 'react-router-dom';
import { LoadProjectProfile } from '../pages/profilepage';
 
// ProjectCard builds a single card for a project.
// Each card needs the following props: img, name, description, tags, page.
function ProjectCard(props) {

    const img = props.img;                                      // The displayed image of the project (string)
    const projectName = props.name;                             // The name/title of the project (string)
    const projectDescription = props.description;               // The description of the project (string)
    const projectTags = props.tags;                             // The tags of the project (Array of: strings)
    const projectCourse = props.course;                           // The course that the project is for (string)
    const projectHours = props.hours;                           // The amount of time in hours spent working on the project (number)
    const projectGrade = props.grade;                           // The grade the project received *scaling format tbd* (number)
    
    // This element renders the Learn More button
    // The button is actually a link that renders the /profile page
    // On the render call, it passes in all of the projects props
    const projectPage = (
        <Link className="btn btn-dark align-self-end" to="/profile" element={
            <LoadProjectProfile imgurl={img} name={projectName} description={projectDescription} course={projectCourse} page="" />}>
            Learn More
        </Link>
    );    

    return (
        <div className="card" key={projectName}>
            <img className="card-img-top" src={img} alt={projectName} />
            <div className="card-body">
                <h3 className="card-title">{projectName}</h3>
                <p>{projectDescription}</p>
                <p className="card-text">{projectTags}</p>
                {projectPage}
            </div>
        </div>
    );
}

// CardList renders out an array of card objects to the screem
// This function needs the prop: deck
// deck should be an array of card objects
export default function CardList(props) {
    const cardDeck = props.projectList;                    // The array of cards to be rendered (Array of: card objects)

    // Map the cards in cardDeck into JSX elements
    const renderableCardDeck = cardDeck.map((card) => {
        return ProjectCard(card);
    });

    return (
        <div className="results">
            <section>
                <div className="container img-container card-deck">
                    {renderableCardDeck}
                </div>
            </section>
        </div>
    );
}