// Import the useState hook from the React library
import React, { useState } from 'react';

// Import the helper component from a separate file
import helper from './helper';

// Import some CSS styles for the App component
import './App.css'

// Define the App component
function App() {
  // Initialize a piece of state called 'urls' and a function to update it called 'setUrls'
  const [urls, setUrls] = useState('');

  // Define a function to handle the form submission
  const handleSubmit = event => {
    event.preventDefault(); // Prevent the form from submitting in the default way
    // Split the 'urls' string into an array of individual URLs
    const urlsArray = urls.split('&url=').map(url => url.trim());
    // Update the 'urls' state with the new array of URLs
    setUrls(urlsArray);
  };

  // Render the App component
  return (
    <div className="container">
      <h1 className="title">Number Management Service</h1>
      <form onSubmit={handleSubmit} className="input-container">
        <label className="input-label">
          URLs:
          <input
            type="text"
            value={urls}
            onChange={event => setUrls(event.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid gray',
              marginRight: '8px',
              width: '400px' // set width to 400px
            }}
          />
        </label>
        <button type="submit" className="button">Submit</button>
      </form>
      {/* Render the helper component and pass in the 'urls' state as a prop */}
      <helper urls={urls} />
    </div>
  );
}

// Export the App component so that it can be used in other parts of the codebase
export default App;
