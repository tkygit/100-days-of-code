import styled from 'styled-components';

const ButtonLink = styled.button`
    font-size: 1.6rem;
    color: white;
    margin: 0;
    cursor: pointer;
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
`;

export default ButtonLink;
