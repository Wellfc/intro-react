// App is the main component
/*
  Browsers can't 'read' JSX code.

  Conventions:
    - All elements must be closed.
    - Empty elements (br, hr, img, input...) must be closed with a '/>' at the end.
    - JSX uses camelCase style (onClick, tabIndex, className...).
    - Use curly braces to embed JavaScript expressions in JSX.
    - Use double curly braces to embed JavaScript objects in JSX.
*/

// Spoiler: this is a hook. We'll learn about them later.
import { useState } from 'react'; // useState is between curly braces because it's a named export.

function App() {
  const [userName, setUserName] = useState(''); // userName is the state variable, setUserName is the function to update it.
  // const [userAge, setUserAge] = useState(0); // useState(0) initializes the state variable with 0.

  const handleInput = event => {
    setUserName(event.target.value);
  }


  // let title = 'Intro to React';
  let message = <h2>Welcome to React, <span>{userName}</span></h2>;

  return (
    <main>
      <div>
        {message}
        
        <input
          type='text'
          className='input'
          placeholder='User name'
          onChange={handleInput}
        />

      </div>
    </main>
  );
}

export default App;
