import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
const Jumbotron = ({ title, body, coa: { link, text }, backgroundImg }) => {
  return (
    <Container backgroundImg={backgroundImg}>
      <h1>{title}</h1>
      {/* <p>{body}</p> */}

      <Coa to={link}>{text}</Coa>
    </Container>
  );
};

const Container = styled.div`
  background-color: #12546e;
  padding: 10%;
  text-align: center;
  width: 100%;
  display: block;
  position: relative;

  h1,
  p {
    color: white;
  }
`;

const Coa = styled(Link)`
  background-color: #1f5ed2;
  color: white;
  padding: 2%;
  border-radius: 10px;
  text-decoration: none;
`;

export default Jumbotron;
