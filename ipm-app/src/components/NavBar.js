import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';



const DEFAULT_USERS = [
    { userId: null, userName: "Log Out", userImg: '/img/null.png' }, //null user
    { userId: "student", userName: "Student", userImg: '/img/student.png' },
    { userId: "admin", userName: "Admin", userImg: '/img/admin.png' }
  ]

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const loginUser = props.loginUserFunction;
  // const currentUser = props.currentUser;

  // const handleClick = (event) => {
  //   const thisUser = event.currentTarget.name
  //   const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === thisUser)[0] || DEFAULT_USERS[0] 

  //   console.log(selectedUserObj);
  //   loginUser(selectedUserObj);
  // }

  // const userButtons = DEFAULT_USERS.map((userObj) => {
  //   if(userObj.userId === currentUser.userId) {
  //     return null;
  //   }

  //   // let classList = "btn user-icon";

  //   return (
  //     <Dropdown.Item className="userIcon" key={userObj.userName} 
  //     name={userObj.userId} onClick={handleClick} >
  //       <img src={userObj.userImg} alt={userObj.userName + " avatar"} /> {userObj.userName}
  //     </Dropdown.Item>
  //   )
  // })
  
    function toggleMenu() {
      setIsMenuOpen(!isMenuOpen);
    }
  
    return (
      <nav className="navbar">
        <div className="navbar-logo"><Link className="nav-link" to="/">IPM</Link></div>
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/upload">Upload</Link>
          <Link className="nav-link" to="/search">Search</Link>
        </div>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>
    );


  // return (
  //   <nav className="navbar navbar-expand-lg">
  //       <a className="navbar-brand" href="#">IPM</a>
  //       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarNavDropdown">
  //           <ul className="navbar-nav">
  //               <li className="nav-item active">
  //                   <Link className="nav-link" to="/">Home</Link>
  //               </li>
  //               <li className="nav-item">
  //                   <Link className="nav-link" to="/upload">Upload</Link>
  //               </li>
  //               <li className="nav-item">
  //                   <Link className="nav-link" to="/search">Search</Link>
  //               </li>
  //               <li className="nav-item">
  //                   <Link className="nav-link" to="/profile">Profile</Link>
  //               </li>
  //               <Dropdown className="">
  //                 <Dropdown.Toggle variant="primary">
  //                   <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
  //                 </Dropdown.Toggle>
  //                 <Dropdown.Menu>
  //                   {userButtons}
  //                 </Dropdown.Menu>      
  //               </Dropdown>
  //           </ul>
  //       </div>
  //   </nav>
  // );
}







