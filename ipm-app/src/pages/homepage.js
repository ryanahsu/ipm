import React from 'react';
import Navbar from '../components/NavBar';

export default function Homepage() {
  return (
    <div>
        <Navbar />
        <header>
            <div class="banner">
                <h1>Welcome to the UW Informatics Projects Portfolio Page</h1>
                <p>Upload your proejcts, share ideas, and create inspiration</p>
            </div>
        </header>

        <main>
            <div class="about">
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