import React, { useState } from 'react'
import styled from 'styled-components'

import { fire } from '../firebase'
import { Commit, FirstCommit } from './Commit'
import Footer from './Footer'
import Navbar from './Navbar'
import { getCommits } from '../services/commitServices'


const MyProgressStyles = styled.div`
  .my-progress-container {
    padding: ${props => props.theme.pagePadding};
  }

  .progress-bar {
    height: 4rem;
    border: 0.2rem solid ${props => props.theme.pink};
    margin-top: 1rem;
    position: relative;
    margin-bottom: 8rem;
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

  .commit-container {
    padding: 5rem 0;
    display: flex;
    border-bottom: 0.5px solid white;
    :first-child {
      border-top: 0.5px solid white;
    }
    
  }

  .commit-brief {
    padding-left: 2rem;
    width: 30%;
  }

  .commit-date {
    text-transform: lowercase;
  }

  .commit-details {
    padding-right: 2rem;
    width: 70%;
  }

  .commit-detail {
    margin-bottom: 3rem;

    :last-child {
      margin: 0
    }
  }

  .repo-name {
    font-weight: 700;
    font-size: 1.4rem;
  }

  .commit-description {
    padding: 0.5rem 0;
  }

  .commit-url {
    font-size: 1.4rem;
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

  const [commits, setCommits] = useState([])
  const userData = JSON.parse(localStorage.getItem('userData'))

  fire.auth().onAuthStateChanged(async (user) => {
    if (user && commits.length === 0) {
      setCommits(await getCommits(userData.userId));
    }
  });

  const getPercentage = () => {
    const currDay = 34
    const totalDays = 100
    
    return Math.round(currDay/totalDays * 100)
  }

  return (
    <MyProgressStyles>
    <Navbar/>
    <div className="my-progress-container">
      { getPercentage() !== 100 ? 
        <div className="progress-bar-title">You're making great progress!</div> :
        <div className="bar-labels total-days-label">You've completed 100 days!</div>
      }
      <div className="progress-bar">
        <CurrentProgressBar width={getPercentage()}/>
        { getPercentage() !== 100 && <ProgressLabel width={getPercentage()}>{getPercentage()}%</ProgressLabel> }
        { getPercentage() !== 100 ? 
          <div className="bar-labels total-days-label">100 days</div> :
          <div className="bar-labels total-days-label">Challenge Finished!</div>
        }
      </div>
      <div className="commits">
        {commits.map((commit) => (
          <Commit dayNumber="01" key={commit.commitId} commit={commit}/>
        ))}
        <FirstCommit startDate={userData.startDate}/>
      </div>
    </div>
    <Footer/>
    </MyProgressStyles>
  )
}

export default MyProgress
