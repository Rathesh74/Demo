import React,{useState} from 'react';
const Login=()=>{
  const validate=()=>{
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    if(email==="" || pass===""){
      alert("Fill the required Details");
    }
    else{
      alert("Login Successfully");
    }
  }
  return(
    <div>
      <form>
        <div>
          <label for="email">Enter Your Email:</label>
          <input type="email" id="email" name="email"></input>
          <label for="pass">Enter Your Password:</label>
          <input type="password" id="pass" name="pass"></input>
          <button  onClick={validate}>Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;