import React from 'react'; // General React import
 
// ProjectCard builds a single card for a project.
// Each card needs the following props: img, name, description, tags, page.
function ProjectCard(props) {

    const img = props.img;                                      // The displayed image of the project (string)
    const projectName = props.name;                             // The name/title of the project (string)
    const projectDescription = props.description;               // The description of the project (string)
    const projectTags = props.tags.map((tag) => tag + " ");     // The tags of the project (Array of: strings) *The project's class should be implemented as a tag*
    const projectPage = props.page;                             // The url to page of the project (string or reactrouter) - project page should likely be a single page that renders out information from a given card

    return (
        <div className="card" key={projectName}>
            <img className="card-img-top" src={img} alt={projectName} />
            <div className="card-body">
                <h3 className="card-title">{projectName}</h3>
                <p>{projectDescription}</p>
                <p className="card-text">{projectTags}</p>
                <a href={projectPage} className="btn btn-dark align-self-end">Learn more</a>
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