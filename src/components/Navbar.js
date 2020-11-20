import React from 'react';
import styled from 'styled-components';
import Button from './styles/Button';

const NavStyles = styled.div`

  .bar {
    display: grid;
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

  @media (max-width: 1300px) {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

function Navbar() {
    return (     
      <NavStyles>
        <div className="bar">
          <a href="/"><img src="/100.svg" alt="./100"/></a>
          <div className="links-container">
            <a href="#challenge">the challenge</a>
            <a href="#rules">the rules</a>
            <a href="/login">log in</a>
            <Button>sign up</Button>
          </div>
        </div>
      </NavStyles>
    )
}

export default Navbar
