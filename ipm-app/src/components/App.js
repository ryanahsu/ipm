import { Homepage, Upload, Profile} from "../pages/homepage";
import Navbar from "./NavBar";
import { Search } from "../pages/searchpage";
import { Routes, Route } from 'react-router-dom';
import { TextSubmissionForm } from '../pages/UploadPage'
import React, {useState} from 'react';
import DEFAULT_USERS from '../data/users.json';




function App(props) {

  const projectList = props.projectList;

  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]);
  const loginUser = (userObj) => {
    setCurrentUser(userObj);
  }


  return (
    <div className="container-fluid d-flex flex-column">
      <Navbar currentUser={currentUser} loginUserFunction={loginUser}/>
      <div className="row flex-grow-1">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="upload" element={<TextSubmissionForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search projectList={projectList} />} />
        </Routes>
      </div>
      

    </div>
  );
}

export default App;