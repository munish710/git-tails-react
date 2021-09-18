import React, { useContext } from "react";
import {
  Info,
  Repos,
  User,
  Search,
  Navbar,
  DetailsTab,
  Footer,
  ExtraInfo,
  TimelineContainer,
} from "../components";
import Loader from "react-loader-spinner";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { isLoading, tabIndex } = useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <Loader
          type="Oval"
          color="#2caeba"
          height={100}
          width={100}
          className="loading"
        />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <DetailsTab />

      {tabIndex === 0 && (
        <>
          <Info />
          <User />
          <ExtraInfo />
        </>
      )}
      {tabIndex === 1 && <Repos />}
      {tabIndex === 2 && <TimelineContainer />}
      <Footer />
    </main>
  );
};

export default Dashboard;
