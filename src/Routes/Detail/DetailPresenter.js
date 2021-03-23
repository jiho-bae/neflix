import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { Link } from "react-router-dom";

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
const TabContainer = styled.div`
  margin-top: 10px;
  width: 70%;
`;

const CompanyContainer = styled.div`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;
  z-index: 1;
`;

const Companies = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100%;
  padding: 10px;
  border-radius: 5px;
`;

const CompanyLogo = styled.div`
  width: 100%;
  height: 200px;
  background: url(${(props) => props.bgImage}) no-repeat center;
  opacity: ${(props) => (props.opacity ? "0.7" : "0.5")};
  background-size: contain;
`;

const CompanyName = styled.h4`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
`;

const SeasonContainer = styled.div`
  padding-right: 10px;
  height: 420px;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-template-rows: auto;
  grid-gap: 15px;
  position: relative;
  z-index: 1;
  overflow-y: auto;
`;

const SeasonItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Season = styled.div`
  height: 200px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 3px;
`;

const SeasonTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const CreditContainer = styled.div`
  padding-right: 10px;
  width: 100%;
  height: 420px;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 10px;
  position: relative;
  z-index: 1;
  overflow-y: auto;
`;

const Credits = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const CreditProfile = styled.div`
  height: 200px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.opacity ? "1" : "0.25")};
  margin-bottom: 3px;
`;

const CreditRole = styled.span`
  font-size: 12px;
  margin-bottom: 3px;
`;

const CreditName = styled.span`
  font-size: 10px;
  color: #95a5a6;
`;

const DetailPresenter = ({ result, credits, loading, error }) =>
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
        <title>{result.title ? result.title : result.name} | Neflix</title>
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
          <TabContainer>
            {" "}
            <Tabs>
              <TabList>
                {result.videos.results && result.videos.results.length > 0 && <Tab>유투브 영상</Tab>}
                {credits.cast && credits.cast.length > 0 && <Tab>출연진</Tab>}
                {credits.crew && credits.crew.length > 0 && <Tab>제작진</Tab>}
                {result.production_companies && result.production_companies.length > 0 && <Tab>제작사</Tab>}
                {result.seasons && result.seasons.length > 0 && <Tab>시즌</Tab>}
              </TabList>

              {result.videos.results && result.videos.results.length > 0 && (
                <TabPanel>
                  <VideoContainer>
                    <CCarousel arrows slidesPerPage={1}>
                      {result.videos.results.map((video, index) => (
                        <Video key={index} src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" />
                      ))}
                    </CCarousel>
                  </VideoContainer>
                </TabPanel>
              )}
              {credits.cast && credits.cast.length > 0 && (
                <TabPanel>
                  <CreditContainer>
                    {credits.cast.map((credit, index) => (
                      <Credits key={index}>
                        <CreditProfile
                          bgImage={
                            credit.profile_path
                              ? `https://image.tmdb.org/t/p/original${credit.profile_path}`
                              : require("../../assets/noProfile.png").default
                          }
                          opacity={credit.profile_path ?? null}
                        ></CreditProfile>
                        <CreditRole>{credit.character}</CreditRole>
                        <CreditName>{credit.name}</CreditName>
                      </Credits>
                    ))}
                  </CreditContainer>
                </TabPanel>
              )}
              {credits.crew && credits.crew.length > 0 && (
                <TabPanel>
                  <CreditContainer>
                    {credits.crew.map((credit, index) => (
                      <Credits key={index}>
                        <CreditProfile
                          bgImage={
                            credit.profile_path
                              ? `https://image.tmdb.org/t/p/original${credit.profile_path}`
                              : require("../../assets/noProfile.png").default
                          }
                          opacity={credit.profile_path ?? null}
                        ></CreditProfile>
                        <CreditRole>{credit.job}</CreditRole>
                        <CreditName>{credit.name}</CreditName>
                      </Credits>
                    ))}
                  </CreditContainer>
                </TabPanel>
              )}
              {result.production_companies && result.production_companies.length > 0 && (
                <TabPanel>
                  <CompanyContainer>
                    {result.production_companies.map((company, index) => (
                      <Companies key={index}>
                        <CompanyLogo
                          bgImage={
                            company.logo_path
                              ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                              : require("../../assets/noImage.png").default
                          }
                          opacity={company.logo_path ?? null}
                        ></CompanyLogo>
                        <CompanyName>{company.name}</CompanyName>
                      </Companies>
                    ))}
                  </CompanyContainer>
                </TabPanel>
              )}
              {result.seasons && result.seasons.length > 0 && (
                <TabPanel>
                  <SeasonContainer>
                    {result.seasons.map((season, index) => (
                      <Link to={`/season/${result.id}/${season.season_number}`} key={season.id}>
                        <SeasonItem>
                          <Season
                            key={index}
                            bgImage={
                              season.poster_path
                                ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                                : result.poster_path
                                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                                : require("../../assets/noPosterSmall.png").default
                            }
                          ></Season>
                          <SeasonTitle>{result.title ? `${result.title} ${season.name}` : `${result.name} ${season.name}`}</SeasonTitle>
                        </SeasonItem>
                      </Link>
                    ))}
                  </SeasonContainer>
                </TabPanel>
              )}
            </Tabs>
          </TabContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  credits: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
