import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;

    .code-url {
        margin: 0;
        padding: 0;
        display: flex;
        justify-self: end;
      }
`;

function Footer() {
    return (
        <FooterStyles>
            <div className="footer-msg">this is a project created by <a href="http://google.com">@tkypham</a></div>
            <a href="https://github.com/tkygit/100-days-of-code" className="code-url">view source code</a>
        </FooterStyles>
    )
}

export default Footer
