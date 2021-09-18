import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import {
  AiOutlineCalendar,
  AiOutlineBranches,
  AiOutlineCode,
} from "react-icons/ai";
import { formatDate } from "../utils/formatDate";

const ExtraInfo = () => {
  const { githubUser, repos } = useContext(GithubContext);
  const { created_at, public_repos } = githubUser;
  const languages = repos.map((item) => {
    const { language } = item;
    return language;
  });

  const uniqueLanguages = [...new Set(languages)];

  return (
    <Wrapper className="section-center">
      <div>
        <span>
          <AiOutlineCalendar />
        </span>
        <p>
          User Joined Github on <strong>{formatDate(created_at)}</strong>{" "}
        </p>
      </div>
      <div>
        <span>
          <AiOutlineBranches />
        </span>
        <p>
          Since then user has created <strong>{public_repos}</strong>{" "}
          repositories
        </p>
      </div>
      <div>
        <span>
          <AiOutlineCode />
        </span>
        <p>
          Since then user has used <strong>{uniqueLanguages.length}</strong>{" "}
          different languages
        </p>
      </div>
    </Wrapper>
  );
};

export default ExtraInfo;

const Wrapper = styled.div`
  margin-top: 3rem;
  max-width: 600px;
  background: var(--clr-white);
  padding: 2rem;
  position: relative;
  &::before {
    content: "Additional Info";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  div {
    display: flex;
    align-items: center;
    color: var(--clr-grey-3);
  }
  p {
    padding-top: 0.75rem;
    color: var(--clr-grey-3);
  }
`;
