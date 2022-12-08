import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const styles = {
    backgroundColor : 'lightgrey'
  };

  return (
    <Wrapper style={styles}>
      <Logo>
        <Link to="/products">Products</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Product
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
        <Button as={Link} to='/'>
          Home
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Abyssinica SIL";
  font-size: 3.5rem;
  color: black;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
