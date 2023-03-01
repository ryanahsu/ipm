import React from 'react'; // General React import


import { Outlet } from 'react-router-dom';

export function Search(props) {
    //const projects = props.projectList;         // The list of projects (Array of: project objects)

    //const renderableCardDeck = (<CardList projectList={projects} />);  // TODO: change projects to filtered projects

    return (
        <div>
            <main>
                <div className="results">
                    <Outlet />
                </div>
            </main>
            <footer className='mt-10 mb-0 profileFooter'>
                <p>&copy; 2023 Informatics Portfolio Manager</p>
            </footer>
        </div>
    );
}