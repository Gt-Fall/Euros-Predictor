import React, { useState, useEffect } from 'react';
import YesterdaysScores from '../components/yesterdaysScores';
import TodaysPredictions from '../components/TodaysPredictions';
import TodaysTable from '../components/TodaysTable';
import YesterdaysGuesses from '../components/YesterdaysGuesses';
import LeaugeTable from '../components/LeaugeTable';

export default function Results({
  matches,
  predictions,
  match1,
  match2,
  match3,
  match4,
  match5,
  match6,
  match7,
}) {
  return (
    <>
      <body class="results-body">
        <header class="header" id="header">
          <h1 class="header__text">Euro's Score Predictor</h1>;
        </header>
        <div class="section_information">
          <h2 class="section_information__sub-header">
            Welcome to the Euros Score Predictor!
          </h2>
          <p class="section_information__text">
            Below you will find yesterdays results, todays games/predictions,
            the overall leauge table and a table for only yesterdays games (who
            won the day!) <br />
            <br />
            Use the below links to jump to different parts of the page or scroll
            <br />
          </p>
          <div class="section_information__links">
            <div
              onClick={() => window.location.replace('#yesterdaysScores')}
              class="result-links"
            >
              <span>Yesterdays Scores</span>
            </div>
            <div
              onClick={() => window.location.replace('#todaysPredictions')}
              class="result-links"
            >
              <span>Todays Predictions</span>
            </div>
            <div
              onClick={() => window.location.replace('#leagueTable')}
              class="result-links"
            >
              <span>Overall Table</span>
            </div>
            <div
              onClick={() => window.location.replace('#todaysTable')}
              class="result-links"
            >
              <span>Daily Table</span>
            </div>
          </div>
        </div>

        <div id="yesterdaysScores">
          <YesterdaysScores
            matches={matches}
            match1={match1}
            match2={match2}
            match3={match3}
            match4={match4}
          />
        </div>

        <div id="todaysPredictions">
          <TodaysPredictions
            predictions={predictions}
            match5={match5}
            match6={match6}
            match7={match7}
          />
        </div>

        <div id="leagueTable">
          <LeaugeTable
            predictions={predictions}
            matches={matches}
            match1={match1}
            match2={match2}
            match3={match3}
            match4={match4}
          />
        </div>

        <div id="todaysTable">
          <TodaysTable predictions={predictions} matches={matches} />
          <YesterdaysGuesses
            predictions={predictions}
            matches={matches}
            match1={match1}
            match2={match2}
            match3={match3}
            match4={match4}
          />
        </div>
      </body>
    </>
  );
}
