import { useState } from 'react'
import './App.css'

/*
function handleLogIn() {
  alert('You are in signIn page');
}
*/
function LogIn(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogIn = () => {
    alert('You are in LOGIN page');
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return(
    <>
      <input 
        type="text"
        placeholder="Username" 
        value={username}
        onChange={handleUsername}
      />
      <br /> 
      <input
        type="password"
        placeholder="Password" 
        value={password}
        onChange={handlePassword}
      />
      <br /> 
      <button onClick={handleLogIn}>Log In</button>
    </>
  );
}
function SignUp(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConPassword] = useState('');
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConPassword = (event) => {
    setConPassword(event.target.value);
  };
  const handleSignUp = () => {
    alert('You are in SIGNUP page');
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };
  
  return(
    <>
      <input 
        type="text"
        placeholder="Username" 
        value={username}
        onChange={handleUsername}
      />
      <br /> 
      <input
        type="password"
        placeholder="Password" 
        value={password}
        onChange={handlePassword}
      />
      <br />
      <input
        type="Confirm Password"
        placeholder="Confirm Password" 
        value={confirmPassword}
        onChange={handleConPassword}
      />
      <br /> 
      <button onClick={handleSignUp}>Sign Up</button>

    </>
  );
}
function AddBoard() {
  // Add logic to add new boards
  return (
    <div>
      <button>Add New Board</button>
      <br />
      <br />
      <button>Add Existing Board</button>

      {/* Form to add new board */}
    </div>
  );
}
function App() {
  
  return(
    
    <>
      <h1>Favs</h1>
      <LogIn />
      <br /> 
      <br /> 
      <SignUp />
      
    </>
  /*
  <>
   <h2>Your page</h2>
   < AddBoard />
  </>
   */
  );
}

export default App
