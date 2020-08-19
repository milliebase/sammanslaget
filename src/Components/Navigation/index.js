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
  color: white;
  backdrop-filter: blur(4px);

  p {
    margin: 0;
    font-weight: 700;
  }

  img {
    height: 30px;
  }
`;

const Navigation = ({ logo, alt }) => {
  return (
    <StyledNavigation>
      <img src={logo} alt={alt} />
      <p>Grupp 15</p>
      <p>#SAMMANSLAGET2020</p>
    </StyledNavigation>
  );
};

export default Navigation;
