import React, { useState, useEffect } from "react";
import styled from "styled-components";
import client from "./../../contentful";

const StyledFooter = styled.div`
  background-color: var(--low-gold-color);
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
  }

  p {
    margin: 0;
  }
`;

const Footer = () => {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "member",
      })
      .then((entries) => {
        setMembers(entries.items);
      });
  }, [setMembers]);

  if (!members) {
    return <p></p>;
  }

  return (
    <StyledFooter>
      {members.map((member, i) => {
        return (
          <div key={i}>
            <p>{member.fields.name}</p>
            <small>{member.fields.role}</small>
          </div>
        );
      })}
    </StyledFooter>
  );
};

export default Footer;
