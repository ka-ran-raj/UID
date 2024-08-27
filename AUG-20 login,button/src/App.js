import React, { useState } from 'react';
import MainComponent from './MainComponent';

const App = () => {
// State to manage login status
const [isLoggedIn, setIsLoggedIn] = useState(false);

// Function to toggle login status
const toggleLoginStatus = () => {
setIsLoggedIn(!isLoggedIn);
};

return (
<div>
<MainComponent isLoggedIn={isLoggedIn} />
<button onClick={toggleLoginStatus}>
Toggle Login Status
</button>
</div>
);
};

export default App;