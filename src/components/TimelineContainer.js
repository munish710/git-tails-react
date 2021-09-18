import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { formatDate } from "../utils/formatDate";
import TimelineCard from "./TimelineCard";

const TimelineContainer = () => {
  const { repos } = useContext(GithubContext);
  return (
    <Wrapper className="section-center">
      <ul>
        {repos.map((repo) => {
          const {
            id,
            name,
            description,
            language,
            stargazers_count,
            forks_count,
            html_url,
            homepage,
            created_at,
          } = repo;
          return (
            <li key={id}>
              <TimelineCard
                name={name}
                description={description}
                html_url={html_url}
                homepage={homepage}
                language={language}
                stars={stargazers_count}
                forks={forks_count}
              />
              <Time className="time-pill">
                <h4>{formatDate(created_at)}</h4>
              </Time>
            </li>
          );
        })}
      </ul>
      <ClearFloat />
    </Wrapper>
  );
};

export default TimelineContainer;

const Wrapper = styled.div`
  min-height: 50vh;
  position: relative;
  margin: 4rem auto;
  width: 100%;
  //Center- Line
  &::before {
    content: "";
    position: absolute;
    left: 20px;
    width: 4px;
    height: 100%;
    background: var(--clr-grey-8);

    @media screen and (min-width: 767px) {
      left: 50%;
    }
  }

  li {
    position: relative;
    padding: 2rem 2rem 3rem 4rem;
    margin-bottom: 2rem;
    @media screen and (min-width: 767px) {
      padding: 2rem 4rem 4rem 4rem;
    }
  }

  li:nth-child(odd) {
    width: 100%;
    @media screen and (min-width: 767px) {
      float: left;
      width: 50%;
      clear: both;
    }
  }

  li:nth-child(even) {
    width: 100%;
    @media screen and (min-width: 767px) {
      width: 50%;
      float: right;
      clear: both;
    }
  }

  //Dot- on the line
  li:nth-child(odd)::before {
    content: "";
    position: absolute;
    top: -18px;
    left: 15px;
    width: 13px;
    height: 13px;
    background: var(--clr-primary-5);
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(0, 242, 195, 0.2);

    @media screen and (min-width: 767px) {
      right: -8px;
      top: 25px;
      left: inherit;
    }
  }
  //Dot on the line
  li:nth-child(even)::before {
    content: "";
    position: absolute;
    top: -18px;
    left: 15px;
    width: 13px;
    height: 13px;
    background: var(--clr-primary-5);
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(0, 242, 195, 0.2);

    @media screen and (min-width: 767px) {
      left: -5px;
      top: 25px;
    }
  }

  li:nth-child(odd) .time-pill {
    position: absolute;
    top: -30px;
    left: 50px;

    @media screen and (min-width: 767px) {
      top: 12px;
      right: -165px;
      left: inherit;
    }
  }

  li:nth-child(even) .time-pill {
    position: absolute;
    top: -30px;
    left: 50px;

    @media screen and (min-width: 767px) {
      top: 12px;
      left: -165px;
    }
  }
`;

const Time = styled.div`
  background: var(--clr-primary-5);
  margin: 0;
  padding: 0.5rem 0.75rem;
  color: var(--clr-white);
  border-radius: 2rem;
  h4 {
    margin: 0;
    font-weight: 400;
    letter-spacing: normal;
  }
`;

const ClearFloat = styled.div`
  clear: both;
`;
