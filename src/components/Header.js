import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer className="container">
      <h3 data-aos="fade-down">
        <a href="https://harripriya-premkumar.netlify.app">Haripriya MP </a>
      </h3>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  h3 {
    padding: 3.5rem;
  }
  a {
    color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 1300px) {
    h3 {
      padding: 2rem;
    }
  }
  @media screen and (max-width: 720px) {
    h3 {
      padding: 1.5rem;
    }
  }
`;

export default Header;
