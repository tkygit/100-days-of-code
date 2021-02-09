import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const CommitStyles = styled.div`
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

export function Commit({ dayNumber, commit }) {

  return (
  <CommitStyles>
    <div className="commit-container">
      <div className="commit-brief">
        <h4 className="commit-day">day {dayNumber}</h4>
        <div className="commit-date">{moment(commit.commitDate).format("Do MMMM YYYY")}</div>
      </div>
      <div className="commit-details">
        <div className="commit-detail">
          <div className="repo-name">{commit.repoName}</div>
          <div className="commit-description">{commit.commitMessage}</div>
          <a href={commit.commitUrl} className="commit-url">Go to commit</a>
        </div>
      </div>
    </div>
  </CommitStyles>
  )
}

export function FirstCommit({ startDate }) {
  return (
    <CommitStyles>
      <div className="commit-container">
        <div className="commit-brief">
          <h4 className="commit-day">day 00</h4>
          <div className="commit-date">{moment().format("Do MMMM YYYY")}</div>
        </div>
        <div className="commit-details">
          <div className="commit-detail">
            <div className="commit-description">Challenge started</div>
          </div>
        </div>
      </div>
    </CommitStyles>
  )
}

