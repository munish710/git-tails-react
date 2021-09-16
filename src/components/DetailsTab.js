import React from "react";
import styled from "styled-components";

const DetailsTab = () => {
  return (
    <Wrapper className="section-center">
      <div className="btn-container">
        <button className="tab-btn active ">User Info</button>
        <button className="tab-btn">Repositiory Stats</button>
        <button className="tab-btn">Timeline</button>
      </div>
    </Wrapper>
  );
};

export default DetailsTab;

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  margin: 1rem auto;
  .btn-container {
    display: flex;
    padding: 0rem 0.5rem;
    justify-content: space-around;
    background: var(--clr-white);
    border-radius: var(--radius);
  }
  .tab-btn {
    /* background: var(--clr-primary-5); */
    background: var(--clr-white);
    margin-bottom: 0;
    color: var(--clr-grey-5);
    padding: 0.75rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    border-radius: var(--radius);
    cursor: pointer;
  }
  @media screen and (min-width: 800px) {
    .tab-btn {
      font-size: 1.25rem;
    }
  }
  .tab-btn:hover {
    color: var(--clr-primary-5);
    border-bottom: 3px solid var(--clr-primary-5);
  }

  .active {
    border-bottom: 3px solid var(--clr-primary-5);
    color: var(--clr-primary-5);
  }
`;
