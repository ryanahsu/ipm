import { Homepage } from "../pages/homepage";
import Navbar from "./NavBar";
import { Search } from "../pages/searchpage";
import { Routes, Route } from 'react-router-dom';
import { TextSubmissionForm } from '../pages/UploadPage'
import React, { useEffect, useState}  from 'react';
import DEFAULT_USERS from '../data/users.json';
import { LoadProjectProfile } from '../pages/profilepage';
import CardList from "./CardList";
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';



function App(props) {

  const [projectList, setProjectList] = useState([]);     // List of all projects in the database

  // Update the list of projects whenever one is added to the database
  useEffect(() => {
    
    const db = getDatabase();   // Grab the database
    const allProjectsRef = ref(db, "projects");

    onValue(allProjectsRef, function(snapshot) {
      const allProjectsObj = snapshot.val();
      const objKeys = Object.keys(allProjectsObj);
      const objArray = objKeys.map((keyString) => {
        allProjectsObj[keyString].key = keyString;
        return allProjectsObj[keyString];
      })

      setProjectList(objArray);
    });

  }, [])

  const originalProjectList = [...projectList];                          // Copy of the original sort order

  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]);
  const loginUser = (userObj) => {
    setCurrentUser(userObj);
  }

  function sortProjects(sortType) {
    // Sort the cardDeck by different metrics based on current selection  

    // Grades Ascending
    if (sortType === 'gradeA') {
      const sorted = [...projectList].sort((a, b) => (a.grade > b.grade) ? 1 : -1);
      setProjectList([...sorted]);
      console.log(projectList);

    // Grades Descending
    } else if (sortType === 'gradeB') {
      const sorted = [...projectList].sort((a, b) => (a.grade > b.grade) ? -1 : 1);
      setProjectList([...sorted]);
      console.log(projectList);

    // Time Spent Ascending
    } else if (sortType === 'timeA') {
      const sorted = [...projectList].sort((a, b) => (a.hours > b.hours) ? 1 : -1);
      setProjectList([...sorted]);
      console.log(projectList);

    // Time Spent Descending
    } else if (sortType === 'timeB') {
      const sorted = [...projectList].sort((a, b) => (a.hours > b.hours) ? -1 : 1);
      setProjectList([...sorted]);
      console.log(projectList);
    }
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <Navbar currentUser={currentUser} loginUserFunction={loginUser}/>
      <div className="row flex-grow-1">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="upload" element={<TextSubmissionForm />} />
          
          <Route path="search" element={<Search />} >
              <Route path=":projectName" element={<LoadProjectProfile projectList={projectList}  />} />
              <Route index element={<CardList projectList={projectList} sortCallback={sortProjects} />} />
          </Route>
          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>
      

    </div>
  );
}

export default App;