import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
const TriSection = () => {
  return (
    <TriContainer>
      <TriItem to="/suggestions">
        <h2>Suggestions</h2>
        <p>
          Visit our suggestion form and let us know what you want to see at a
          meetup!
        </p>
      </TriItem>
      <TriItem to="/about">
        <h2>About</h2>
        <p>Learn more about what the aim of the meetup. </p>
      </TriItem>
      <TriItem to="/events">
        <h2>Events</h2>
        <p>See what topics and events we have covered in the past.</p>
      </TriItem>
    </TriContainer>
  );
};
const TriContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2%;
  margin-top: 3%;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const TriItem = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: black;
  border-radius: 10px;
  padding: 1%;

  &:hover {
    background: #bdd3fb;
  }
`;

export default TriSection;
