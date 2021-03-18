import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6rem;
  background: #1e232b;
`;

const Layout = (props) => {
  const {
    rounded, elevated, children, style, className, ...restProps
  } = props;
  return (
    <>
      <Wrapper
        {...restProps}
      >
        {children}
      </Wrapper>
    </>
  );
};

export default Layout;
