import React from 'react';
import Navbar from '../components/NavBar';
import {LoadProjectProfile} from '../pages/profilepage'

export function Homepage() {
  return (
    <div>
        <header>
            <div className="banner">
                <h1>Welcome to the UW Informatics Projects Portfolio Page</h1>
                <p>Upload your proejcts, share ideas, and create inspiration</p>
            </div>
        </header>

        <main>
            <div className="about">
                <h2>What is IPM?</h2>
                <p>IPM is a centralized hub for informatics students at the University of Washington to share projects completed within the iSchool's various classes to offer insight about the class material and teachings, and insipration to create meaningful work</p>
                <p>Disclaimer: IPM is not a tool for plagerism and users should only use sources as inspiration and as a guide for what informatics classes offer</p>
            </div>
        </main>
            
        <footer>
            <p>&copy; 2023 Informatics Portfolio Manager</p>
        </footer>
    </div>
  )};



export function Upload() {
    return (
        <div>
            <p>
                this is the upload page
            </p>
        </div>
    )
}

export function Profile() {
    return (
        <div>
            <main>
                <div class="banner">
                    <h1>Tell us more about the project!</h1>
                    <p>How do you want to describe your project?</p>
                </div>
                <LoadProjectProfile /> 
            </main>
            <footer className="profileFooter">
                <p>&copy; 2023 Informatics Portfolio Manager</p>
            </footer>
        </div>
    )
}

export function Search() {
    return (
        <div>
            <p>
                this is the Search page
            </p>
        </div>
    )
}