import React, { useState } from 'react';

const Test = () => {
    const [location, setLocation] = useState('');
  
    // Handle location input change
    const handleLocationChange = (e) => {
      setLocation(e.target.value);
    };
  
    // Handle form submission to fetch prayer times
    const handleSubmit = (e) => {
      e.preventDefault();
      // Call a function to fetch prayer times based on the location
      fetchPrayerTimes(location);
    };

    const fetchPrayerTimes = (location) => {
        const apiKey = '80bf63d2909ced2719313f42ac3d44d3'; // Replace with your API key
        const apiUrl = `https://muslimsalat.com/${location}.json?key=${apiKey}`;
      
        fetch(apiUrl, {    
            method: 'GET',    
            withCredentials: true,    
            crossorigin: true,    
            mode: 'no-cors', 
            headers: {
              'Access-Control-Allow-Origin': '*',
              },     
          })
          .then((response) => {

            console.log("response",response)
            if (!response.ok) {
              throw new Error('Error: Unable to fetch data');
            }
            return response.json();
          })
          .then((data) => {
            // Handle the data (e.g., display prayer times)
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
            // Handle the error (e.g., display an error message)
          });
      };
      
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleLocationChange}
          />
          <button type="submit">Get Prayer Times</button>
        </form>
        {/* Display prayer times here */}
      </div>
    );
  }

export default Test