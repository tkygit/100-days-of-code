import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

import Navbar from './Navbar'
import Button from './styles/Button'
import Footer from './Footer'

const GetStartedStyles = styled.div`
  .get-started-container {
    padding: ${props => props.theme.pagePadding};
    font-size: 7rem;
    text-transform: lowercase;
  }

  .git-username, input {
    font-size: 7rem;
    font-family: inherit;
    color: ${props => props.theme.pink};
    background: none;
    border: none;
    text-transform: lowercase;
  }

  .days-input {
    max-width: 14rem;
  }

  .SingleDatePickerInput {
    background: none;
  }

  .DateInput {
    background: none;
    width: auto;
  }

  .SingleDatePickerInput_calendarIcon {
    padding: 0;
    margin-right: 2rem; 
  }

  .SingleDatePickerInput_calendarIcon_svg {
    fill: ${props => props.theme.pink};
    height: auto;
    width: 60px;
  }

  .CalendarDay__selected {
    background: ${props => props.theme.pink};
    color: white;
    border: none;
  }

  .submit-get-started {
    margin-top: 6rem;
    font-size: 6rem;
  }
`;

function GetStarted() {
  const [startDate, setStartDate] = useState(moment()) 
  const [calendarFocused, setCalendarFocused] = useState(false)
  const userData = JSON.parse(localStorage.getItem('userData'))

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <GetStartedStyles>
      <Navbar/>
      <div className="get-started-container">
        <form onSubmit={handleSubmit}>
            <span>i,</span><span className="git-username">@{userData.username}</span>
            <span>, commit to starting a 100</span>
            <span> day coding challenge starting </span>
            <SingleDatePicker
              date={startDate}
              onDateChange={(date) => setStartDate(date)}
              focused={calendarFocused}
              onFocusChange={({focused}) => setCalendarFocused(focused)}
              numberOfMonths={1}
              isOutsideRange={() => false}
              displayFormat="Do MMMM YYYY"
              showDefaultInputIcon inputIconPosition="before"
              noBorder={true}
              hideKeyboardShortcutsPanel={true}
              keepOpenOnDateSelect={false}
              verticalSpacing="80"
            />
            <Button className="submit-get-started">start</Button>
        </form>
      </div>
      <Footer/>
    </GetStartedStyles>
  )
}

export default GetStarted
