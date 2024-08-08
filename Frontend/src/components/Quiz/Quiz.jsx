import React, { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "react-quiz-component";
import QuizTile from "./components/QuizTile";
import Leaderboard from "./components/Leaderboard";
import "./Quizmenu.css";
import TypewriterEffect from "../Home/components/typewriter";

function QuizApp(props) {
  const [quizSet, setQuizSet] = useState({});
  const [quiz, setQuiz] = useState(dummyquiz);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isQuizRunning, setIsQuizRunning] = useState(false);
  const [quizID, setQuizID] = useState(0);
  const [userData, setUserData] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const url = "http://localhost:4000";

  function customResultPage(obj) {
    return <div className="react-quiz-resultpage">result</div>;
  }

  const setQuizResult = async (obj) => {
    setIsQuizRunning(false);
    obj["ID"] = props.username;
    obj["quizID"] = quizID;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${url}/quiz/submit`, obj);
      setLoading(false);
      props.setAlert(response.data.message);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  function handleClick(index) {
    const fetchQuizData = async () => {
      try {
        const response = await axios.post(`${url}/attempt`, {
          id: index,
        });
        setQuiz(response.data);
        setLoading(false);
        setIsQuizRunning(true);
        setQuizID(index);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError(err);
          setLoading(false);
        }
      }
    };
    fetchQuizData();
  }

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchQuizData = async () => {
      try {
        const response = await axios.post(`${url}/quiz`, {
          cancelToken: source.token,
          username: props.username,
        });

        setQuizSet(response.data.quizInfo);
        setUserData(response.data.userData);
        setLeaderboardData(response.data.leaderboardData);
        setLoading(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchQuizData();
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  if (loading) {
    return <div className="error-screen">Loading...</div>;
  }

  if (error) {
    return <div className="error-screen">Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="quiz-hero-section">
        <h1 className="quiz-hero-title"><TypewriterEffect text="Quizzes" breaktext="Let's Test Your knowledge"></TypewriterEffect></h1>
      </div>
      <div className="quiz-outer-container">
        <div className="quiztile-container">
          {!isQuizRunning ? (
            <>
              {quizSet.map((quiz, index) => {
                return (
                  <QuizTile
                    key={index}
                    id={index}
                    onClick={() => handleClick(index)}
                    title={quiz.quizTitle}
                    points={quiz.totalPoints}
                    data={userData}
                  />
                );
              })}
            </>
          ) : (
            <div className="react-quiz-outer-container">
              <Quiz
                quiz={quiz}
                onComplete={setQuizResult}
                timer={120}
                customResultPage={customResultPage}
              />
            </div>
          )}
        </div>
      </div>
      {!isQuizRunning && (
        <Leaderboard data={leaderboardData} username={props.username} />
      )}
    </div>
  );
}

export default QuizApp;

const dummyquiz = {
  quizTitle: "React Quiz Component Demo",
  quizSynopsis:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  nrOfQuestions: "4",
  questions: [
    {
      question:
        "How can you access the state of a component from inside of a member function?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "ReactJS is developed by _____?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Google Engineers", "Facebook Engineers"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "ReactJS is an MVC based framework?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "10",
    },
    {
      question: "Which of the following concepts is/are key to ReactJS?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "30",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      questionType: "photo",
      answerSelectionType: "single",
      answers: [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "What are the advantages of React JS?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
      ],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
  ],
};