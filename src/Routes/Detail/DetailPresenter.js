import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0px 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
`;

const IMDBLink = styled.span`
  padding: 2px 5px;
  background-color: #f1c40f;
  border-radius: 5px;
  color: #2980b9;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;
const VideoContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 800px;
  height: 600px;
`;

const Video = styled.iframe`
  width: 680px;
  height: 450px;
`;

const CCarousel = styled(Carousel)`
  button {
    background-color: rgba(20, 20, 20, 0.5);
  }
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Neflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_title ? result.original_title : result.original_name} | Neflix</title>
      </Helmet>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}></Backdrop>
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        ></Cover>
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
            <Divider>·</Divider>
            <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} 분 </Item>
            <Divider>·</Divider>
            <Item>
              {result.genres && result.genres.map((genre, index) => (index === result.genres.length - 1 ? genre.name : `${genre.name} / `))}{" "}
            </Item>
            {result.imdb_id ? (
              <>
                {" "}
                <Divider>·</Divider>
                <IMDBLink
                  role="link"
                  aria-label="Open IMDB page"
                  onClick={() => window.open(`https://www.imdb.com/title/${result.imdb_id}`, "_blank")}
                >
                  IMDB
                </IMDBLink>
              </>
            ) : null}
            <Divider>·</Divider>
            <Item>
              {" "}
              <span role="img" aria-label="rating">
                ⭐️
              </span>{" "}
              {result.vote_average}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {result.videos.results && result.videos.results.length > 0 && (
            <VideoContainer>
              <CCarousel arrows slidesPerPage={1}>
                {result.videos.results.map((video, index) => (
                  <Video key={index} src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" />
                ))}
              </CCarousel>
            </VideoContainer>
          )}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;