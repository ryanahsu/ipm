import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';



const DEFAULT_USERS = [
    { userId: null, userName: "Log Out", userImg: '/img/null.png' }, //null user
    { userId: "student", userName: "Student", userImg: '/img/student.png' },
    { userId: "admin", userName: "Admin", userImg: '/img/admin.png' }
  ]

export default function Navbar(props) {
  const loginUser = props.loginUserFunction;
  const currentUser = props.currentUser;

  const handleClick = (event) => {
    const thisUser = event.currentTarget.name
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === thisUser)[0] || DEFAULT_USERS[0] 

    console.log(selectedUserObj);
    loginUser(selectedUserObj);
  }

  const userButtons = DEFAULT_USERS.map((userObj) => {
    if(userObj.userId === currentUser.userId) {
      return null;
    }

    let classList = "btn user-icon";

    return (
      <Dropdown.Item className={classList} key={userObj.userName} 
      name={userObj.userId} onClick={handleClick} >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} /> {userObj.userName}
      </Dropdown.Item>
    )
  })



  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">IPM</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upload">Upload</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
          <li className="nav-item ml-auto">
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {userButtons}
            </Dropdown.Menu>      
          </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
}







