import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { fire } from '../firebase'
import Button from './styles/Button';
import ButtonLink from './styles/ButtonLink';
import githubLogin from '../services/githubLoginServices'

const NavStyles = styled.div`

  .bar {
    display: flex;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }  

  .links-container {
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: end;
  }

  a {
    font-weight: 400;
    text-decoration: none;
    padding: 1rem 0;
    padding-right: 7rem;
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    border: 0; 
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
  }
`;

function Navbar() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const history = useHistory();

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const handleLogin = async () => {
    const userData = await githubLogin();
    return userData.startDate ? history.push('/my-progress') : history.push('/get-started')
  }

  return (     
    <NavStyles>
      <div className="bar">
        <a href="/"><img src="/100.svg" alt="./100"/></a>
        <div className="links-container">
          <a href="/#challenge">the challenge</a>
          <a href="/#rules">the rules</a>
          { !isLoggedIn 
            ? <>
                <ButtonLink onClick={handleLogin}>log in</ButtonLink>
                <Button onClick={handleLogin}>sign up with github</Button>
              </>
            : <>
                <a href="/my-progress">my progress</a>
                <a onClick={() => {fire.auth().signOut()}} href="/">log out</a>
              </>
          }
        </div>
      </div>
    </NavStyles>
  )
}

export default Navbar
