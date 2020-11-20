import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Button from './styles/Button'
import Footer from './Footer'

const GetStartedStyles = styled.div`
    .get-started-container {
        padding: 11rem 20rem 11rem 20rem;
        font-size: 8rem;
    }

    .git-username, input {
        font-size: 8rem;
        font-family: inherit;
        color: ${props => props.theme.pink};
        background: none;
        border: none;
        text-align: center;
    }

    .days-input {
        max-width: 14rem;
    }

    .date-input {
        max-width: 80rem;
    }

    .submit-get-started {
        margin-top: 6rem;
        font-size: 8rem;
    }

`;

function GetStarted() {
  return (
    <GetStartedStyles>
      <Navbar/>
      <div className="get-started-container">
        <form>
            <span>i,</span><span className="git-username">@gitusername</span>
            <span>, commit to starting a 100</span>
            <span> day coding challenge starting </span>
            <input type="`text`" value="20th november 2020" className="date-input"/>
            <Button className="submit-get-started">start</Button>
        </form>
      </div>
      <Footer/>
    </GetStartedStyles>
  )
}

export default GetStarted
