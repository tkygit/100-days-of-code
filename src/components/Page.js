import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const theme = {
  black: '#333333',
  grey: '#272A2D',
  pink: '#EAA1FF',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  mobileWidth: '480px',
  tabletWidth: '768px',
  desktopWidth: '1024px',
  largeWidth: '1200px',
  pagePadding: '11rem 15rem 11rem 15rem'
};

const StyledPage = styled.div`
  color: white;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    background-color: ${theme.grey};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 5rem 6rem;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'Anonymous Pro', monospace;
    font-weight: 400;
  }
  a {
    cursor: pointer;
    color: white;
    font-weight: 700;
    &:hover {
      font-weight: 700;
      color: ${props => props.theme.pink};
    }
  }
  button {  
    font-family: 'Anonymous Pro', monospace; 
    font-weight: 700;
    cursor: pointer;
    
    :focus {
      outline: none;
    }
  }

  p, h1, h2, h3 {
    margin: 0;
    padding: 0;
    display: inline-block;
  }

  h1 {
    font-size: 6rem;
    font-family: 'Anonymous Pro', monospace;
    font-weight: 400;

    @media (max-width: ${props => props.theme.mobileWidth}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 4rem;
    font-family: 'Anonymous Pro', monospace;
    font-weight: 700;
  }

  h3 {
    font-size: 2.8rem;
    font-family: 'Anonymous Pro', monospace;
    font-weight: 700;
  }

  h4 {
    font-size: 2rem;
    font-family: 'Anonymous Pro', monospace;
    font-weight: 700;
    margin: 0;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          {this.props.children}
          <GlobalStyle />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
