import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Section from "Components/Section";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
`;

const SeasonPresenter = ({ result, seasonTitle, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Neflix</title>
      </Helmet>
      <Loader />{" "}
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>{`${seasonTitle} | Neflix`}</title>
      </Helmet>
      <Section seasonTitle={seasonTitle}>
        {result.episodes &&
          result.episodes.length > 0 &&
          result.episodes.map((episode) => (
            <Poster
              key={episode.episode_number}
              id={episode.episode_number}
              imageUrl={episode.still_path}
              title={episode.name}
              isMovie={false}
              isSeason={true}
            />
          ))}
      </Section>
      {error && <Message color="#e74c3c" text={error} />}
      {result && result.episodes.length === 0 && <Message text="준비중입니다." color="#95a5a6" />}
    </Container>
  );

SeasonPresenter.propTypes = {
  result: PropTypes.object,
  seasonTitle: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default SeasonPresenter;
