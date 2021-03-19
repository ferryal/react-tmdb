/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { jsx, css } from '@emotion/react';
import { fetchMovieDetail } from '../../actions/movie';
import {
  Layout, Navbar, Loading,
} from '../../components';
import starIcon from '../../assets/star.svg';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.detailMovie);
  const { detail } = movie;
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, []);

  return (
    <div
      css={css`
        background: #1e232b;
        width: auto;
        color: #fff;
        font-family: 'Montserrat';
    `}
    >
      <Navbar title={`Movie Detail - ${id}`} />
      <Layout>
        {detail.loading && (
          <div css={css`margin-top: 1rem;`}>
            <Loading />
          </div>
        )}
        {!(detail.loading) && (
          <>
            <div css={css`margin: 2rem;`}>
              <img src={`https://image.tmdb.org/t/p/w200${detail.poster_path}`} alt="Movie Poster" />
            </div>
            <div>
              <h1>{detail.title}</h1>
              {detail.genres && (
                detail.genres.map((genre) => (
                  <span key={genre.id}>
                    {genre.name}
                    {' '}
                  </span>
                ))
              )}

              <div css={css`display: flex; justify-content:space-around;`}>
                <div>
                  <p css={css`font-size: 36px;`}>
                    <img src={starIcon} alt="star" />
                    {' '}
                    {detail.vote_average}
                  </p>
                </div>
                <div css={css`font-size: 12px;padding-top: 1.6rem;`}>
                  <p css={css`text-transform: uppercase;`}>user score</p>
                  <p>{detail.vote_count}</p>
                </div>
                <div css={css`font-size: 12px;padding-top: 1.6rem;`}>
                  <p css={css`text-transform: uppercase;`}>budget</p>
                  <p>{detail.budget}</p>
                </div>
              </div>
              <div css={css`width:400px; font-size: 14px;`}>
                <h3>Overview</h3>
                <p css={css`line-height: 200%;`}>{detail.overview}</p>
              </div>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
};

export default MovieDetail;
