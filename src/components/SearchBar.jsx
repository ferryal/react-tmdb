import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.label`
    background: white;
    color: lightgrey;
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    position: relative;
    box-shadow: 0 0 4rem 0.125rem darkgrey;
    padding: 0.5rem 0.625rem;
    &:focus-within{
        &:before{
            content: '';
            border-radius: 0.25rem;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        }
`;

const Loupe = () => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 14.5l-3.72-3.72" />
      <circle cx="6.67" cy="6.67" r="5.33" />
    </g>
  </svg>
);

const Input = styled.input`
    color: darkgrey;
    border: none;
    background: none;
    outline: none;
    flex: 1;
    margin-left: 0.375rem;
    &::placeholder{
        color: lightgrey;
    }
    &::selection{
        background: lightgrey;
        color: white;
        }
`;

const Container = styled.div`
    max-width: 50vw;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    z-index: 3;
    position: fixed;
`;

const getPlaceholder = (kindURL) => {
  if (kindURL === 'movies') return 'movies';
  if (kindURL === 'tv') return 'tv';
  if (kindURL === 'people') return 'people';
  return 'movies, tv or people';
};

const Searchbar = ({
  kindURL, value, onChange, onKeyUp, ...props
}) => (
  <Container {...props}>
    <Wrapper>
      <Loupe />
      <Input placeholder={`Search ${getPlaceholder(kindURL)}...`} autoFocus value={value} onChange={onChange} onKeyUp={onKeyUp} />
    </Wrapper>
  </Container>
);

export default Searchbar;
