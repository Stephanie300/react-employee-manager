import React from 'react';
import styled from 'styled-components'
import fireBaseApp from './../firebase/firebaseConfig'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import {Link} from 'react-router-dom'

const LoginPageStyles = styled.div `  
max-width: 480px;
margin: 6rem auto 0;
header{
    text-align:center;
    margin-bottom: 2rem;
}
    h1{
        font-size: 2rem;
        font-weight:600;
    }
    .jimo{
        background:grey;
    }
    button{
        margin-top:2rem;
    }

`
const LoginPage = (props) => {
    // component logic goes here
    // KEYWORD THIS WILL WORK HERE 

    const handleLogin = (e) => {
        //NO CONCEPT OF THE KEYWORD THIS WITH ARROW FUNCTION
        fireBaseApp.auth().signInWithEmailAndPassword('jim@home.com', '123456')
        .then((userCredential) => {
            console.log(userCredential)
            console.log(userCredential.user)
            console.log(userCredential.user.uid)
            console.log(userCredential.user.email)
            // redirect to the dashboard
        })
    }
   
    

    return ( 
            <LoginPageStyles>
              <header>
                 <h1>Account Login</h1>
                  <p>access your employee manager</p>
             </header>

            {/* <Link to="/">Home</Link>
            <Link to="/register">Register</Link> */}
  
          <FormInput   inputType="email" label="valid email address"/>
          <FormInput   inputType="password" label="password (8 charachters)"/>
          <Button onClick={handleLogin} label="login to your account" uiStyle="signup"/>

            </LoginPageStyles>

    );
}
 
export default LoginPage;