import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const TopicsContext = createContext([]);
const Root = () => {
  const topics = useLoaderData();
  return (
    <TopicsContext.Provider value={topics}>
      <Header />
      <Outlet />
      <Footer />
    </TopicsContext.Provider>
  );
};

export default Root;
