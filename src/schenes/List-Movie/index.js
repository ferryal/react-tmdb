/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchListMovie, fetchSearchMovie, resetMovies, fetchFilterMovieByYear,
} from '../../actions/movie';
import {
  Navbar, Layout, Card, Loading, Button, SearchBar,
} from '../../components';

const ListMovie = ({ isSearchable = true, kindURL = 'multi' }) => {
  const thisYear = new Date().getFullYear();
  const options = [];
  const minOffset = 0;
  const maxOffset = 60;
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedYear, setselectedYear] = useState(thisYear);
  const [isFilter, setIsFilter] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listMovie);
  const { movies } = list;
  const loading = false;

  if (Object.keys(items).length !== 0) {
    for (let i = minOffset; i <= maxOffset; i += 1) {
      const year = thisYear - i;
      options.push(<option value={year} key={year}>{year}</option>);
    }
  }

  useEffect(() => {
    dispatch(fetchListMovie(page));
  }, []);

  useEffect(() => {
    if (movies !== 0 && movies.length > 0) {
      setPage(page + 1);
      setTimeout(() => {
        setItems(items.concat(movies));
      }, 1000);
    }
  }, [movies]);

  const handleNextResult = () => {
    if (search === '' && isFilter === false) {
      setTimeout(() => {
        dispatch(fetchListMovie(page));
      }, 1000);
    } else if (search !== '') {
      setTimeout(() => {
        dispatch(fetchSearchMovie(search, page));
      }, 1000);
    } else if (isFilter === true) {
      setTimeout(() => {
        dispatch(fetchFilterMovieByYear(selectedYear, page));
      }, 1000);
    }
  };

  const searchMovie = () => {
    if (search !== '' && search.length >= 1) {
      dispatch(resetMovies());
      setItems([]);
      dispatch(fetchSearchMovie(search, page));
    } else {
      setPage(1);
      dispatch(resetMovies());
      setItems([]);
      dispatch(fetchListMovie(page));
    }
  };

  const handleFilter = (e) => {
    setselectedYear(e.target.value);
    setIsFilter(true);
    setItems([]);
    dispatch(resetMovies());
    setPage(1);
    dispatch(fetchFilterMovieByYear(e.target.value, page));
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
        >
          {isSearchable && (
            <SearchBar
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              kindURL={kindURL}
              onKeyUp={searchMovie}
            />
          )}
        </div>
        <div css={css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          width: 100vw;
          max-width: 100vw;
        `}
        >
          <div
            css={css`
              margin-top: 4rem;
            `}
          >
            {Object.keys(items).length !== 0 && (
              <select
                css={css`
              z-index: 10;
            `}
                value={selectedYear}
                onChange={handleFilter}
              >
                {options}
              </select>
            )}
          </div>
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
