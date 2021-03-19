/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { jsx } from '@emotion/react';

const Container = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #1f4037;
  background: -webkit-linear-gradient(to right, #1f4037, #2a2e36);
  background: linear-gradient(to right, #1f4037, #2a2e36);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  flex-flow: wrap;
`;

const WrapperItem = styled.div`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  font-variant: small-caps;
  margin: 0px 30px;
  width: 300px;
`;

const Navbar = (props) => {
  const { title } = props;
  return (
    <>
      <Container>
        <WrapperItem css={{
          marginLeft: '5vw',
          fontSize: '2rem',
        }}
        >
          <Link to="/" css={{ textDecoration: 'none', color: '#fff' }}>
            {title}
          </Link>
        </WrapperItem>
        <div css={{ flexGrow: 1 }} />
      </Container>
    </>
  );
};

export default Navbar;
