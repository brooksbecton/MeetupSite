import React from "react";
import TriSection from "./components/TriSection";
import Jumbotron from "../../components/Jumbotron";
import PageContainer from "../../components/PageContainer";
import styled from "styled-components";
import manInFrontOfComputer from "./images/manAndComputer.svg";
import computerDesk from "./images/computerDesk.svg";

export default function Home() {
  return (
    <div>
      <Jumbotron
        title="Starkville Programming Meetup"
        body="Meetup in mid Mississippi area for programmers with any level of
        experience."
        coa={{ link: "/events", text: "See Events" }}
        backgroundImg={computerDesk}
      />
      <PageContainer>
        <TriSection />
        <TwoThree>
          <div>
            <h3>What is it? </h3>
            <img
              src={manInFrontOfComputer}
              alt="Cartoon Man sitting infront of computer"
            />
            <p>
              Too many developers become silo'd off from the programming
              community because lack of communication between developers.
              Starkville Programming Meetup was created to bridge developers in
              the Starkville area together to provide communication and
              education in various topics of programming. The topics can range
              from many different areas of prorgamming as well as various levels
              of education ranging from high level theory topics to baseline
              topics that non programmers can understand.
            </p>
          </div>
          <div>
            <h3>Upcoming Events</h3>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFzbVT9vuJj7b1LZbFBsQue6yaG8U4LrEg2fAr6T8KzivlYb4"
                alt=""
                style={{
                  borderRadius: "50000px",
                  backgroundColor: "gainsboro",
                  width: "50px",
                  height: "50px",
                  display: "inline"
                }}
              />
              <p>June 5th, 2018</p>
              <p>
                Covering new features of React and how they might be used in
                production
              </p>
            </div>
            <div>
              <img
                src="https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67"
                alt=""
                style={{
                  borderRadius: "50000px",
                  backgroundColor: "gainsboro",
                  width: "50px",
                  height: "50px",
                  display: "inline"
                }}
              />
              <p>June 6th, 2018</p>
              <p>
                Covering new features of ES6 and how they might be used in
                production
              </p>
            </div>
            <div>
              <img
                src="https://angular.io/assets/images/logos/angular/angular.png"
                alt=""
                style={{
                  borderRadius: "50000px",
                  backgroundColor: "gainsboro",
                  width: "50px",
                  height: "50px",
                  display: "inline"
                }}
              />
              <p>June 8th, 2018</p>
              <p>
                Covering new features of Angular and how they might be used in
                production
              </p>
            </div>
          </div>
        </TwoThree>
      </PageContainer>
    </div>
  );
}

const TwoThree = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2%;
  div {
    padding: 1%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
