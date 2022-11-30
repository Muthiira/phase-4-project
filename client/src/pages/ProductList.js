import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

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
              <ReactMarkdown>{product.price}</ReactMarkdown>
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
