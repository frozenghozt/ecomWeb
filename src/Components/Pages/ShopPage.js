import React, { useState } from "react";
import styled from "styled-components";
import BreadcrumbTwo from "../SmallComponents/BreadcrumbTwo";
import Filter from "../Structure/Filter";
import Products from "../Structure/Products";
import FluidContainer from "../../styled/FluidContainer";
import FilterList from "../SmallComponents/FilterList";

const ShopPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopPage = () => {
  window.scrollTo(0, 0); // Scroll top when mounted
  const [sort, setsort] = useState("");
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const sorter = (categorie) => {
    setsort(categorie);
  };

  const opener = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  return (
    <ShopPageContainer>
      <FilterList opener={opener} isOpen={filterIsOpen} />
      <BreadcrumbTwo />
      <FluidContainer>
        <Filter sorter={sorter} opener={opener} />
        <Products tosort={sort} isOpen={filterIsOpen} />
      </FluidContainer>
    </ShopPageContainer>
  );
};

export default ShopPage;
