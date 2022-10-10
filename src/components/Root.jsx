import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const TopicsContext = createContext([]);
const QuizContext = createContext([]);
const Root = () => {
  const topics = useLoaderData();
  const quiz = useLoaderData();
  console.log(topics);
  console.log(quiz);
  return (
    <TopicsContext.Provider value={topics}>
      <Header />
      <Outlet />
      <Footer />
    </TopicsContext.Provider>
  );
};

export default Root;
