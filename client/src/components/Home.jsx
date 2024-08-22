import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Image2 from '../assets/image2.avif';

const Home = () => {
  const [text, setText] = React.useState(null);
  const [sessionId, setSessionId] = React.useState(null);
  const [serviceCode, setServiceCode] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);

  const login = useCallback(() =>  {
    console.log("Logging in",{text, sessionId, serviceCode, phoneNumber});
    fetch('http://localhost:3000/ussd/relay',
    {
      method: 'POST',
      headers: {        'Content-Type': 'application/json'      },
      body: JSON.stringify({sessionId:'1234', serviceCode:'2345', phoneNumber:'1234', text})
    })
    .then(async(response) => {
      const data = await response.json();
      if(![200, 201, 204].includes(response.status)){
        throw new Error("There was an error processing your request:: " + data?.message);
      }
      return data
      })
      .then((response) => {
        if(!response.status){
          throw new Error("There was an INTERNAL error processing your request:: " + response?.message);
        }
        console.log("Response:::>", response);
        
    })
    .catch((error) => {
      console.error('Error :::>   ', error);
    })}
  , [text])
  

  return (
    
    <div 
    className="bg-cover bg-center bg-no-repeat h-screen text-center flex flex-col items-center justify-center" 
    style={{ backgroundImage: `url(${Image2})` }}
  >
    <div className="bg-white bg-opacity-75 p-8 rounded-lg">
      <h2 className="text-4xl font-bold mb-4">Welcome to Community Resilience</h2>
      <p className="mb-8">Your resource for educational materials and community engagement.</p>
      <Link to="/resources" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Explore Resources
      </Link>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        className="border border-gray-400 px-4 py-2 rounded ml-4 mt-4" 
        placeholder="Enter text" 
      />
      <button 
        value={"login"} 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ml-4 mt-4" 
        onClick={login} 
      >
        Login
      </button>
    </div>
  </div>
  
  );
};

export default Home;
