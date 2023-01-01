import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fullName,setFullName] = useState({
    fname : "",
    lname : "",
    email : "",
    phone : "",
    qua : "",
  });
  

  const inputEvent = (e) => {
    // console.log('Clicked');
    console.log(e.target.value);  //will print what is typed after each change in letters
    console.log(e.target.name); //will print name attribute of form
    
    // const value = e.target.value;
    // const name = e.target.name;
// OR by object destructuring
const {value,name} = e.target;

setFullName((preValue) => {
  // console.log(preValue);  //preValue stores the object of useState that stores the previous data before updation

  // if(name === 'fname'){
  //  return{ fname : value,
  //   lname : preValue.lname,
  //   email : preValue.email,
  //   phone : preValue.phone,
  //  };
  // }
  // else if(name ==='lname'){
  //   return{ fname : preValue.fname,
  //   lname : value,
  //   email : preValue.email,
  //   phone : preValue.phone,
  //  };
  // }
  // else if(name ==='email'){
  //   return{ fname : preValue.fname,
  //   lname : preValue.lname,
  //   email : value,
  //   phone : preValue.phone,
  //  };
  // }
  // else if(name ==='phone'){
  //   return{ fname : preValue.fname,
  //   lname : preValue.lname,
  //   email : preValue.email,
  //   phone : value,
  //  };
  // }

  // OR make the code smaller using spread operator
  return {
...preValue,
[name] : value,  //if written without square bracket a new key will be created in the object
  };
});
  };

  const onSubmit = (e) => {
    e.preventDefault();  //the default behaviour of form is to be reloaded after submitting the form but this function prevent the default 
    // behaviour i.e the form is not reloaded
   alert("Form Submitted");
  };

  return(
    <>
    <form onSubmit={onSubmit}>
    
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      <p>{fullName.qua}</p>

      {/* Controlled component as the form is controlled by the react component instead of the DOM (form) */}
      <input type="text" placeholder='Enter Your Name' name='fname'
       onChange={inputEvent} value={fullName.fname}/>  
       {/* //single source of truth value={name} for input name is the only source of truth that stores actual data entered*/}

       <input type="text" placeholder='Enter Your Last Name' name='lname'
       onChange={inputEvent} value={fullName.lname}/> 

       <input type="email" placeholder='Enter Your Email' name='email'
       onChange={inputEvent} value={fullName.email} autoComplete='off'/> 

       <input type="number" placeholder='Enter Your Mobile Number' name='phone'
       onChange={inputEvent} value={fullName.phone}/> 

       <input type="text" placeholder='Enter Your Qualification' name='qua'
       onChange={inputEvent} value={fullName.qua}/> 

      <button type="submit" >Submit 👍</button>
    
    </form>
    </>
  );
}

export default App;
