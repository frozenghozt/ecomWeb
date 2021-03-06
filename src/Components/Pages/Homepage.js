import React from "react";
import styled from "styled-components";
import Banner from "../Structure/Banner";
import Categories from "../Structure/Categories";
import Showcase from "../Structure/Showcase";
import Seals from "../Structure/Seals";
// import Newsletter from "../Structure/Newsletter";
import FixedContainer from "../../styled/FixedContainer";

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Homepage = () => {
  window.scrollTo(0, 0); // Scroll top when mounted
  return (
    <HomePageStyle>
      <Banner />
      <FixedContainer>
        <Categories />
        <Showcase />
        <Seals />
      </FixedContainer>
      {/* <Newsletter /> */}
    </HomePageStyle>
  );
};

export default Homepage;
