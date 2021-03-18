/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { jsx } from '@emotion/react';

const Card = (props) => {
  const {
    rounded, elevated, style, className, id, name, urlImg, isDetail, children,
  } = props;

  return (
    <>
      {
        !isDetail
          ? (
            <Link to={`/pokemon/${id}`} css={{ color: '#292829', textDecoration: 'none' }}>
              <div
                className={className}
                css={{
                  borderRadius: rounded ? '10px' : '0',
                  position: 'relative',
                  margin: '10px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  flexDirection: 'column',
                  '&:hover': {
                    opacity: '0.6',
                  },
                  ...style,
                }}
              >

                <div>
                  <img
                    src={urlImg}
                    alt={`${name} Pokemon Profile`}
                    css={{
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                      borderBottomRightRadius: '10px',
                      borderBottomLeftRadius: '10px',
                    }}
                  />
                  <p css={{
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#fff',
                  }}
                  >
                    {name}
                  </p>
                </div>

              </div>
            </Link>
          )
          : (
            <div
              className={className}
              css={{
                borderRadius: rounded ? '10px' : '0',
                position: 'relative',
                margin: '10px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                flexDirection: 'column',
                ...style,
              }}
            >
              {children}
            </div>
          )
      }
    </>
  );
};

export default Card;
