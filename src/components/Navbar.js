import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { GoMarkGithub } from "react-icons/go";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <nav>
      <NavCenter className="section-center">
        <div className="logo">
          <GoMarkGithub className="logo-icon" />
          <h3>GitTails</h3>
        </div>
        {isUser && user.picture && <img src={user.picture} alt={user.name} />}
        {isUser && user.name && (
          <h4>
            <strong>{user.name}</strong>
          </h4>
        )}
        {isUser ? (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        ) : (
          <button onClick={loginWithRedirect}>Login</button>
        )}
      </NavCenter>
    </nav>
  );
};

const NavCenter = styled.div`
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: 1fr auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  .logo {
    display: flex;
    align-items: center;
    color: var(--clr-primary-4);
    h3 {
      font-weight: 400;
      margin-left: 0.25rem;
      margin-bottom: 0;
    }
  }
  .logo-icon {
    font-size: 2rem;
  }
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
