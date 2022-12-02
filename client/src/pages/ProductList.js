import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import {  Delete } from "./crud";

function ProductList({ update}) {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

function onDelete(id) {
  Delete(id).then(resp => {
    const index = products.findIndex(r => r.id === id);
    console.log(index)
    let latestUpdate = [...products];
    latestUpdate.splice(index, 1);
    setProducts(latestUpdate);
  })
}

  return (
    <Wrapper>
      {products.length > 0 ? (
        products.map((product) => (
          <Recipe key={product.id}>
            <Box>
              <h2>{product.name}</h2>
              <p> QUANTITY : {product.quantity}
                {/* &nbsp;·&nbsp; */}
                {/* <cite>By {product.user.username}</cite> */}
              </p>
			  <p>PRICE : {product.price}</p>
              {/* <ReactMarkdown>{product.price}</ReactMarkdown> */}
			  <Button color="primary" type="delete" onClick={() =>onDelete(product.id)}>DELETE</Button>
		
			  <Button color="primary" type="update" onClick={() => update(product)}>UPDATE</Button>
            </Box>
          </Recipe>
        ))
      ) : (
        <>
          <h2>No Products Found</h2>
          <Button as={Link} to="/new">
            Create a New Product
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default ProductList;
