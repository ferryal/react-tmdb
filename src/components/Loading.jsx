/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import Spinner from '../assets/spinner.gif';

const Loading = () => (
  <div css={{
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    marginTop: '10rem',
  }}
  >
    <img src={Spinner} alt="Loading..." />
  </div>
);

export default Loading;
