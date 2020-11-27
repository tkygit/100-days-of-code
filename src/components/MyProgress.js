import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Footer from './Footer'

const MyProgressStyles = styled.div`
  .my-progress-container {
    padding: 4rem 15rem 4rem 15rem;
  }

  .progress-bar {
    height: 4rem;
    border: 0.2rem solid ${props => props.theme.pink};
    margin-top: 1rem;
    position: relative;
  }

  .total-days-label {
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: -3rem;

    @media (max-width: ${props => props.theme.mobileWidth}) {
      display: none;
    }
  }
`;

const CurrentProgressBar = styled.div`
  display: inline-block;
  width: ${props => props.width}%;
  background-color: ${props => props.theme.pink};
  height: 3.8rem;
`;

const ProgressLabel = styled.div`
  display: inline-block;
  position: absolute;
  left: ${props => props.width}%;
  bottom: -3rem;
`;

function MyProgress() {

  const getPercentage = () => {
    const currDay = 34
    const totalDays = 100
    
    return Math.round(currDay/totalDays * 100)
  }

  return (
    <MyProgressStyles>
    <Navbar/>
    <div className="my-progress-container">
      <div className="progress-bar-title">You're making great progress!</div>
      <div className="progress-bar">
        <CurrentProgressBar width={getPercentage()}/>
        { getPercentage() !== 100 && <ProgressLabel width={getPercentage()}>{getPercentage()}%</ProgressLabel> }
        { getPercentage() !== 100 ? 
          <div className="bar-labels total-days-label">100 days</div> :
          <div className="bar-labels total-days-label">Challenge Finished!</div>
        }
      </div>
    </div>
    <Footer/>
    </MyProgressStyles>
  )
}

export default MyProgress
