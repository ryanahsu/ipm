import React from 'react';

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
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="upload-page.html">Upload</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="profile-page.html">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="search-page.html">Search</a>
            </li>
            </ul>
        </div>
    </nav>
  );
}







