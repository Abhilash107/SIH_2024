import React from 'react';
import './Updates.css';

export function Updates() {
  return (
    <div className="updates-container">
      <section className="hero">
        <img src="src\Images\Cartoon Style Qixi Festival Publicity Snsbanner _ PSD Free Download - Pikbest.jpg" alt="Festival Image" />
        <h1>Discover the Hidden Gems of India</h1>
        <p>Explore the lost and underrated festivals of India</p>
      </section>
      <section className="updates">
        <h2>Latest Updates</h2>
        <div className="updates-grid">
          <div className="update-card">
            <img src="src\Images\Washington DC during the Cherry Blossom blooms….jpg" alt="Update Image 1" />
            <h3>Cherry Blossom Festival</h3>
            <p>Experience the beauty of cherry blossoms in Meghalaya</p>
            <a href="https://nationalcherryblossomfestival.org/" target="_blank" rel="noopener noreferrer">
              <button>Read More</button>
            </a>
          </div>
          <div className="update-card">
            <img src="src\Images\download.jpg" alt="Update Image 2" />
            <h3>Chettikulangara Bharani</h3>
            <a href="https://www.keralatourism.org/event/chettikulangara-bharani/10" target="_blank" rel="noopener noreferrer">
              <button>Read More</button>
            </a>
          </div>
          <div className="update-card">
            <img src="src\Images\licensed-image.jpg" alt="Update Image 3" />
            <h3>Rann Utsav</h3>
            <a href="https://utsav.gov.in/view-event/rann-utsav-1" target="_blank" rel="noopener noreferrer">
              <button>Read More</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}