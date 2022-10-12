import React, { useContext } from "react";
import { TopicsContext } from "./Root";
import Topic from "./Topic";

const Topics = () => {
  const topicsData = useContext(TopicsContext);
  const topics = topicsData.data;

  return (
    <section>
      <div className="bg-gray-300">
        <div className="container flex flex-col items-center px-4 py-5 pb-24 mx-auto text-center lg:pb-5 md:py-5 md:px-10 lg:px-32 text-gray-900">
          <div
            className="my-3 flex flex-col justify-center"
            style={{ backgroundImage: `url("../../bg.svg")`, height: "500px" }}
          >
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
              Choose your favorite Language
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white font-semibold">
              Best quiz platform we will ask you quiz questions for Programming
              Language.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
            {topics.map((topic) => (
              <Topic key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
