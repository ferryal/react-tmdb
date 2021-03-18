/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListMovie } from '../../actions/movie';
import {
  Navbar, Layout, Card, Loading, Button,
} from '../../components';

const ListMovie = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listMovie);
  const { movies } = list;
  const loading = false;

  useEffect(() => {
    dispatch(fetchListMovie(page));
  }, []);

  useEffect(() => {
    if (movies !== 0 && movies.length > 0) {
      setPage(page + 1);
      setTimeout(() => {
        setItems(items.concat(movies));
      }, 1500);
    }
  }, [movies]);

  const handleNextResult = () => {
    setTimeout(() => {
      dispatch(fetchListMovie(page));
    }, 1000);
  };

  const renderListMovie = () => (
    <>
      <Layout>
        {items.map((movie, key) => (
          <Card
            rounded="rounded"
            elevated="eleveated"
            css={css`
                  width: 200px; 
                `}
            key={key}
            id={movie.id}
            name={movie.title}
            urlImg={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            isDetail={false}
          />
        ))}
      </Layout>
    </>
  );

  return (
    <div
      css={css`
        background: #1e232b;
        width: auto;
    `}
    >
      <Navbar title="React Movie" />
      <div css={{ marginTop: '1rem' }}>
        <div css={css`
          display: flex;
          justify-content: center;
          flex-flow: wrap;
          margin-left: 3rem;
          margin-right: 3rem;
        `}
        />
        <div css={css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          width: 100vw;
          max-width: 100vw;
        `}
        >
          { Object.keys(movies).length !== 0 && Object.keys(items).length !== 0 ? renderListMovie() : <Loading />}
        </div>
        {loading && <Loading />}
        {!loading && (
          <div css={css`
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          `}
          >
            <Button
              onClick={handleNextResult}
              css={css`
              border-radius: 5px;
              background-color: #03ac0d;
              color: #fff;
              border: none;
              margin-bottom: 1rem;
              `}
              text="Show more Movie"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListMovie;
