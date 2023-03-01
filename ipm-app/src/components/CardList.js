import React from 'react'; // General React import

import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown'; // Import for dropdown
import DropdownButton from 'react-bootstrap/DropdownButton'; // Import for dropdown button

function SortButton() {
    return (
      <DropdownButton id="sort-button" title="Sort by">
        <Dropdown.Item href="#/action-1">Grade</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Upload Date</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Likes</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Time Spent</Dropdown.Item>
      </DropdownButton>
    );
}

const sortButton = SortButton();
 
// ProjectCard builds a single card for a project.
// Each card needs the following props: img, name, description, tags, page.
function ProjectCard(props) {

    const img = props.img;                                      // The displayed image of the project (string)
    const projectName = props.name;                             // The name/title of the project (string)
    const projectDescription = props.description;               // The description of the project (string)
    const projectTags = props.tags;                             // The tags of the project (Array of: strings)
    const projectCourse = props.course;                         // The course that the project is for (string)
    const projectHours = props.hours;                           // The amount of time in hours spent working on the project (number)
    const projectGrade = props.grade;                           // The grade the project received *scaling format tbd* (number)
    const projectPageName = projectName.replaceAll(' ', '-');      // The name of the project's details page (string)
    
    // This element renders the Learn More button
    // The button is actually a link that renders the /profile page
    // On the render call, it passes in all of the projects props
    const projectPage = (
        <Link className="btn btn-dark align-self-end" to={"/search/"+projectPageName}>
            Learn More
        </Link>
    );    

    return (
        <div className="card" key={projectName}>
            <img className="card-img-top" src={img} alt={projectName} />
            <div className="card-body">
                <h3 className="card-title">{projectName}</h3>
                <p>{projectDescription}</p>
                <p className="card-text">{projectCourse}</p>
                <p className="card-text">Grade received: {projectGrade}</p>
                <p className="card-text">{projectHours} hours</p>
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
        <main>
            <div className="banner">
                <h1>Search for Projects</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search here..." />
            </div>
            <h2>Results:</h2>
            <div className="sort">
                {sortButton}
            </div>
            <div className="results">
                <section>
                    <div className="container img-container card-deck">
                        {renderableCardDeck}
                    </div>
                </section>
            </div>
        </main>
    );
}