import React, { useState, useEffect } from 'react';

const Test = () => {
  const [location, setLocation] = useState('');
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle location input change with debouncing
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle form submission to fetch prayer times
  const handleSubmit = (e) => {
    e.preventDefault();
    // Start loading indicator
    setLoading(true);
    // Call a function to fetch prayer times based on the location
    fetchPrayerTimes(location);
  };

  useEffect(() => {
    if (location) {
      // Debounce the input to wait for a short pause (e.g., 500ms) before making the request
      const timer = setTimeout(() => {
        handleSubmit({ preventDefault: () => {} });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const fetchPrayerTimes = (location) => {
    const apiUrl = "https://muslimsalat.com/london.json?key=80bf63d2909ced2719313f42ac3d44d3";

    fetch(apiUrl,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          // "Content-Type": "application/json",
          'Content-Type': 'application/x-www-form-urlencoded',
        }})
      .then((response) => {
        console.log("Res", response)
        if (!response.ok) {
          throw new Error('Error: Unable to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with fetched data and stop loading indicator

        console.log("Data", data)
        setPrayerTimes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error (e.g., display an error message) and stop loading indicator
        setLoading(false);
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Display prayer times here using the 'prayerTimes' state */}
          {/* <pre>{JSON.stringify(prayerTimes, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
};

export default Test;
