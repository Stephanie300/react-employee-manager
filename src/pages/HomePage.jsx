import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import Logo from './../components/icons/Logo'
 

const HomePageStyles = styled.header `  

margin: 6rem auto 0;
text-align:center;
 svg{
        width: 120px;
    }

    h1{
        font-size: 2.25rem;
    }
    p{
        font-size: 1.125rem;
        color:#696975;
        width: 60%;
        margin: 1rem auto 0;
    }
    a{
        display:block;
        margin:1rem auto 0;
        max-width:320px;
        text-decoration:none;
        width:90%;
        border:inherit;
        font-size: 1.25rem;
        font-weight:500;
        background-color: inherit;
        box-shadow:0 0 3px 0 rgba(0, 0, 0, 0.2);
        color: #8e979c;
        border-radius:4px;
        padding:0.5rem 1rem;
    }

    .login{
        background:linear-gradient(to top, #3f51b5, #2196f3 );
        color:white;
    }
    .register{
        background:linear-gradient(to top, #de1111, #f52415 );
        color:white;
    }
`
const HomePage = (props) => {
    return ( 
            <HomePageStyles>
                <Logo/>
                 <h1>Employee manager</h1>
                 <p>We focus on the paperwork while you focus on your employees</p>
                 <Link to="/login" className="login">Login</Link>
                 <Link to="/register" className="register">Register</Link>
             </HomePageStyles>
    );
}
 
export default HomePage;