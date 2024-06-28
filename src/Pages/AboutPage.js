import React from 'react';
// Import your CSS file for styling
import './AboutContact.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="background-image"></div>
      <div className="content">
        <h1>About Us</h1>
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>At our Pet Adoption System, our mission is simple yet profound: to rescue animals in distress, rehabilitate them with care and love, and ultimately place them in forever homes where they will thrive. We are committed to reducing pet homelessness and promoting responsible pet ownership through education and support.</p>
        </div>
        <div className="what-we-do-section">
          <h2>What We Do</h2>
          <ul>
            <li><strong>Rescue and Rehabilitation:</strong> We work tirelessly to rescue animals from shelters, streets, and difficult situations. Each animal receives necessary medical care, rehabilitation, and lots of attention to prepare them for adoption.</li>
            <li><strong>Matching Process:</strong> Our adoption process focuses on creating perfect matches between pets and adopters. We consider both the needs of the pet and the lifestyle of the potential adopter to ensure compatibility and long-term happiness.</li>
            <li><strong>Education and Support:</strong> We provide resources and guidance to adopters on pet care, training, and integration into their homes. We believe informed and responsible pet ownership is crucial to the well-being of both pets and their families.</li>
          </ul>
        </div>
        <div className="why-choose-us-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Compassion and Care:</strong> Every decision we make is guided by compassion and a commitment to the welfare of animals.</li>
            <li><strong>Transparency:</strong> We operate with transparency in our processes, from the health and history of our animals to our adoption procedures.</li>
            <li><strong>Community:</strong> We foster a community of pet lovers, volunteers, and supporters who share our dedication to animal welfare.</li>
          </ul>
        </div>
        <div className="get-involved-section">
          <h2>Get Involved</h2>
          <p>Whether you're looking to adopt a pet, volunteer your time, or support us through donations, you are instrumental in our mission. Together, we can make a difference in the lives of animals and create a more compassionate world.</p>
        </div>

        
      </div>
    </div>
  );
}

export default AboutPage;