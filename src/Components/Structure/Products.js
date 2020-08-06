import React from "react";
import styled from "styled-components";
import { Server } from "miragejs";
import productObj from "../../dbObjects/ProductsObj";
import Product from "../SmallComponents/Product";
import { useQuery } from "react-query";

const ProductsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

let server = new Server();
server.get("/api/inventory", productObj);

const fetchProducts = async () => {
  const res = await fetch("/api/inventory");
  return res.json();
};

const Products = () => {
  const { data, status } = useQuery("products", fetchProducts);
  return (
    <ProductsContainer>
      {status === "success" &&
        data.inventory.map(
          ({
            id,
            uid,
            name,
            sku,
            routeUrl,
            price,
            prevprice,
            img,
            hot,
            colors,
          }) => (
            <Product
              key={id}
              uid={uid}
              name={name}
              sku={sku}
              routeUrl={routeUrl}
              price={price}
              prevprice={prevprice}
              img={img}
              hot={hot}
              colors={colors}
            />
          )
        )}
    </ProductsContainer>
  );
};

export default Products;
