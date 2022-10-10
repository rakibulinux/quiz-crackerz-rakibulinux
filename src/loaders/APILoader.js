const APILoader = async (params) => {
  const topicsData = await fetch(
    "https://openapi.programming-hero.com/api/quiz"
  );
  const topics = await topicsData.json();
  const quizData = await fetch(
    `https://openapi.programming-hero.com/api/quiz/${params.id}`
  );
  const quiz = await quizData.json();

  return { topics: topics, quiz: quiz };
};

export default APILoader;
