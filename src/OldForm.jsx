import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name,setName] = useState(""); //for saving 1st input
  const [fullName,setFullName] = useState(); //for displaying 1st input
  const [lastName,setLastName] = useState('');  //for saving
  const [lastNameNew,setLastNameNew] = useState('');  //for displaying

  const inputEvent = (e) => {
    // console.log('Clicked');
    // console.log(e.target.value);  //will print what is typed after each change in letters
    setName(e.target.value);
  };

const inputEventTwo = (e) => {
  setLastName(e.target.value);
};

  const onSubmit = (e) => {
    e.preventDefault();  //the default behaviour of form is to be reloaded after submitting the form but this function prevent the default 
    // behaviour i.e the form is not reloaded
    setFullName(name);
    setLastNameNew(lastName);
  };

  return(
    <>
    <form onSubmit={onSubmit}>
    
      <h1>Hello {fullName} {lastNameNew}</h1>
      {/* Controlled component as the form is controlled by the react component instead of the DOM (form) */}
      <input type="text" placeholder='Enter Your Name'
       onChange={inputEvent} value={name}/>  
       {/* //single source of truth value={name} for input name is the only source of truth that stores actual data entered*/}

       <input type="text" placeholder='Enter Your Last Name'
       onChange={inputEventTwo} value={lastName}/> 

      <button type="submit" >Submit 👍</button>
    
    </form>
    </>
  );
}

export default App;
