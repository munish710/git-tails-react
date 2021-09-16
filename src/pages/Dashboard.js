import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar, DetailsTab } from "../components";
import Loader from "react-loader-spinner";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);
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
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
