import React from "react";
import fitnessTracker from "../../images/fitnessTracker.jpg";
import movieInformer from "../../images/movieInformer.jpg";
import noteTaker from "../../images/noteTaker.jpg";
import passwordGenerator from "../../images/passwordGenerator.jpg";
import refactor from "../../images/refactor.jpg";
import techBlog from "../../images/techBlog.jpg";
import timedSportsQuiz from "../../images/timedSportsQuiz.jpg";
import weatherDashboard from "../../images/weatherDashboard.jpg";
import workDayScheduler from "../../images/workDayScheduler.jpg";

function Portfolio() {
  return (
    <div className="row wrapper-container">
      <div className="cards row justify-content-center">
        <div className="col-5">
          <a href="https://fitness-tracker-jw21.herokuapp.com/">
            <h3>Fitness Tracker</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={fitnessTracker}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://github.com/jwilliams25400/Fitness-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>

        <div className="col-5">
          <a href="https://trgrf.github.io/MovieCharacters/">
            <h3>Movie Informer</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={movieInformer}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://github.com/Trgrf/MovieCharacters"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>

        <div className="col-5">
          <a href="https://note-taker-jw21.herokuapp.com/">
            <h3>Note Taker</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={noteTaker}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://github.com/jwilliams25400/Note-Taker.git"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>

        <div className="col-5">
          <a href="https://jwilliams25400.github.io/Code--PWGenerator/">
            <h3>Password Generator</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={passwordGenerator}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://github.com/jwilliams25400/Code--PWGenerator.git"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>

        <div className="col-5">
          <a href="https://jwilliams25400.github.io/Code-Refractor/">
            <h3>Refactor</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={refactor}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://github.com/jwilliams25400/Code-Refractor.git"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>

        <div className="col-5">
          <a href="https://tech-blog-jw21.herokuapp.com/">
            <h3>Tech Blog</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={techBlog}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://github.com/jwilliams25400/Tech-Blog.git"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>

        <div className="col-5">
          <a href="https://jwilliams25400.github.io/Code-Timed-Quiz/">
            <h3>Timed Quiz</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={timedSportsQuiz}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://github.com/jwilliams25400/Code-Timed-Quiz.git"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>

        <div className="col-5">
          <a href="https://github.com/jwilliams25400/Code-Weather-App.git">
            <h3>Weather Dashboard</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={weatherDashboard}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://jwilliams25400.github.io/Code-Weather-App/"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>

        <div className="col-5">
          <a href="https://jwilliams25400.github.io/Code-Day-Planner/">
            <h3>Work Day Scheduler</h3>
          </a>
          <div className="pjPhoto">
            <img
              className="card-img"
              src={workDayScheduler}
              alt="Card cap"
              width="300"
              height="300"
            />
          </div>
          <a
            href="https://github.com/jwilliams25400/Code-Day-Planner"
            target="_blank"
            rel="noopener noreferrer"
            className="m-3"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
