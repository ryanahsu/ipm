import React from 'react'; // General React import

import Dropdown from 'react-bootstrap/Dropdown'; // Import for dropdown
import DropdownButton from 'react-bootstrap/DropdownButton'; // Import for dropdown button

import Navbar from '../components/NavBar'; // NavBar import
import CardList from '../components/CardList'; // Default import of the CardList

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

const test = SortButton();

export function Search(props) {
    const projects = props.projectList;         // The list of projects (Array of: project objects)

    const renderableCardDeck = (<CardList projectList={projects} />);  // TODO: change projects to filtered projects

    return (
        <div>
            <Navbar />
            <main>
                <div className="banner">
                    <h1>Search for Projects</h1>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search here..." />
                </div>
                <h2>Results:</h2>
                <div className="sort">
                    {test}
                </div>
                <div className="results">
                    {renderableCardDeck}
                </div>
            </main>
            <footer className='profileFooter mt-3'>
                <p>&copy; 2023 Informatics Portfolio Manager</p>
            </footer>
        </div>
    );
}