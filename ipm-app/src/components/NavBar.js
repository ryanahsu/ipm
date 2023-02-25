import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">IPM</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/upload">Upload</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}







