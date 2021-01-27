import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar'
import Button from './styles/Button'
import Footer from './Footer'
import githubLogin from '../services/githubLoginServices'

const HomepageStyles = styled.div`
  .hero {
    text-align: center;
    padding: 11rem 20rem 11rem 20rem;
  }

  .hero-heading {
    max-width: 80rem;
  }

  .btn {
    padding: 1.5rem 10rem;
  }

  .hero-btn {
    margin: 5rem auto 0 auto;
  }

  .details-btn {
    margin-top: 2rem;
  }

  .details-section {
    display: flex;
    padding-bottom: 8rem;
    justify-content: center;
  }

  .details-heading {
    width: 38rem;
    margin-top: -1rem;
  }
  
  .details-text {
    max-width: 63rem;
  }
`;


function Homepage() {

  const history = useHistory();

  const handleLogin = async () => {
    const userData = await githubLogin();
    localStorage.setItem('userData', JSON.stringify(userData));
    return userData.startDate ? history.push('/my-progress') : history.push('/get-started')
  }

  return (
    <HomepageStyles>
      <Navbar/>
      <div className="hero">
        <h1 className="hero-heading">
          100 days to become a better programmer
        </h1>
        <Button className="btn hero-btn" onClick={handleLogin}>get started with github</Button>
      </div>
        <section className="details-section" id="challenge">
          <h2 className="details-heading">the challenge.</h2>
          <div className="details-text">
          the key to becoming a better programmer is to actually write code. pick something you want to learn or get better at and <strong>challenge yourself to commit something to github for 100 days.</strong>
          <br></br>
          you’ll see:<br></br>
          - your coding abilities improve;<br></br>
          - ideas you had turn into finished projects; and<br></br>
          - your incredible capacity to learn new things;
          </div>
        </section>
        <section className="details-section" id="rules">
          <h2 className="details-heading">the rules.</h2>
          <div className="details-text">
          some general guidelines to consider so you get the most out of this 100 day challenge.<br></br>
          1. you don’t need to do 100 consecutive days of coding. this app will count the 100 cumulative days of coding. the key is consistency over time, not perfection.<br></br>
          2. you should only count days of deliberate practice, not mindless copy/paste exercises or shallow code edits. the goal is to make you a more effective programmer, and that means focused programming.
          </div>
        </section>
        <section className="details-section">
          <h2 className="details-heading">get ready.</h2>
          <div className="details-text">
            if you’re ready to take on the challenge, sign up via your github account.
            <Button className="btn details-btn" onClick={handleLogin}>sign up with github</Button>
          </div>
        </section>
      <Footer/>
    </HomepageStyles>
  )
}

export default Homepage
