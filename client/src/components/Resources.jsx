import React from 'react';
import Health from '../assets/health.jpeg';
import Agri from '../assets/agri.jpg';
import Edu from '../assets/edu.jpeg';
import Env from '../assets/env.jpg';
import Disaster from '../assets/disaster.jpg';
import axios from 'axios';

const EducationalResources = () => {
  const handleHover = (imageId) => {
    // Handle hover effect (optional)
    axios.get('/api/hover-effect')
      .then(response => {
        console.log(`Hovered over ${imageId}`, response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8">Educational Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Health */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
          onMouseEnter={() => handleHover('health')}
        >
          <img src={Health} alt="Health" className="w-48 h-48 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Health</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Balanced Diet:</strong> Understanding the importance of a balanced diet for maintaining good health and preventing diseases.</li>
              <li><strong>Preventative Healthcare:</strong> Tips and practices for preventing common illnesses through proper hygiene and regular check-ups.</li>
              <li><strong>Mental Health:</strong> Importance of mental well-being, managing stress, and accessing mental health resources.</li>
            </ul>
          </div>
        </div>

        {/* Agriculture */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
          onMouseEnter={() => handleHover('agriculture')}
        >
          <img src={Agri} alt="Agriculture" className="w-48 h-48 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Agriculture</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Sustainable Farming:</strong> Techniques for sustainable farming that conserve resources and ensure long-term agricultural productivity.</li>
              <li><strong>Pest Control:</strong> Effective pest control methods that minimize environmental impact.</li>
              <li><strong>Soil Health:</strong> Best practices for maintaining soil fertility and preventing erosion.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
          onMouseEnter={() => handleHover('education')}
        >
          <img src={Edu} alt="Education" className="w-48 h-48 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Access to Education:</strong> Strategies to improve access to quality education, especially in underserved communities.</li>
              <li><strong>Digital Literacy:</strong> Importance of digital literacy in the modern world and resources to improve skills.</li>
              <li><strong>Continuous Learning:</strong> Encouraging lifelong learning through various educational programs and platforms.</li>
            </ul>
          </div>
        </div>

        {/* Environment */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
          onMouseEnter={() => handleHover('environment')}
        >
          <img src={Env} alt="Environment" className="w-48 h-48 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Environment</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Conservation Practices:</strong> Effective methods for conserving natural resources and protecting biodiversity.</li>
              <li><strong>Waste Management:</strong> Strategies for reducing waste, recycling, and responsible disposal methods.</li>
              <li><strong>Climate Change Awareness:</strong> Understanding the impacts of climate change and actions individuals can take to mitigate these effects.</li>
            </ul>
          </div>
        </div>

        {/* Disaster Preparedness */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
          onMouseEnter={() => handleHover('disaster-preparedness')}
        >
          <img src={Disaster} alt="Disaster Preparedness" className="w-48 h-48 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Disaster Preparedness</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Emergency Planning:</strong> Creating and implementing emergency plans for households and communities.</li>
              <li><strong>First Aid Training:</strong> Importance of first aid training and basic survival skills.</li>
              <li><strong>Community Resilience:</strong> Building resilient communities through collaboration and preparedness initiatives.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EducationalResources;
