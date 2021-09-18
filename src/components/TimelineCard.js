import React from "react";
import styled from "styled-components";
import { GoRepo, GoCode, GoStar, GoRepoForked } from "react-icons/go";

const TimelineCard = ({
  name,
  description,
  html_url,
  homepage,
  language,
  stars,
  forks,
}) => {
  return (
    <Wrapper>
      <h3 className="card-title">
        <GoRepo />
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <div className="content">
        <p>{description}</p>
        {homepage && (
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            {homepage}
          </a>
        )}
      </div>
      <div className="footer">
        <p>
          <GoCode /> {language}
        </p>
        <p>
          <GoStar /> {stars}
        </p>

        <p>
          <GoRepoForked /> {forks}
        </p>
      </div>
    </Wrapper>
  );
};

export default TimelineCard;

const Wrapper = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 1rem;
  svg {
    vertical-align: middle;
  }
  .card-title svg {
    margin-right: 0.5rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    font-weight: 400;
    text-transform: lowercase;
    letter-spacing: normal;
  }

  p {
    margin-bottom: 0.5rem;
  }
  .footer {
    margin-top: 0.5rem;
    display: flex;
    gap: 1rem;
    /* justify-content: space-between; */
  }
`;
