import React from 'react'; // General React import

import Navbar from '../components/NavBar'; // NavBar import
import CardList from '../components/CardList'; // Default import of the CardList

export function Search(props) {
    const projects = props.projectList;         // The list of projects (Array of: project objects)

    const renderableCardDeck = (<CardList projectList={projects} />);  // TODO: change projects to filtered projects

    return (
        <div>
            <Navbar />
            {renderableCardDeck}
        </div>
    );
}