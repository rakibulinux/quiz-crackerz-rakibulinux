import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const TopicContext = createContext([]);
const QuizContext = createContext([]);
const Root = () => {
  const topics = useLoaderData();
  const quiz = useLoaderData();
  console.log(topics);
  console.log(quiz);
  return (
    <TopicContext.Provider value={topics}>
      <Header />
      <Outlet />
      <Footer />
    </TopicContext.Provider>
  );
};

export default Root;
