import React from "react";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);

  p {
    margin: 0;
    font-weight: 700;
  }

  p:last-of-type {
    display: none;
    text-transform: uppercase;
  }

  img {
    height: 30px;
  }

  @media (min-width: 992px) {
    p:last-of-type {
      display: block;
    }
  }
`;

const Navigation = ({ logo, alt, group, hashtag }) => {
  return (
    <StyledNavigation>
      <img src={logo} alt={alt} />
      <p>{group}</p>
      <p>{hashtag}</p>
    </StyledNavigation>
  );
};

export default Navigation;
