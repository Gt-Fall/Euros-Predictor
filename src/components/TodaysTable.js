import React, { useState, useEffect } from 'react';
import supabase from './supabase';

export default function TodaysTable({ predictions, matches, match1 }) {
  let position = 1;
  let todaysPredictions = [];

  function todaysScores() {
    predictions.map((guess) => {
      let todaysOutcomePoints = 0;
      let todaysGoalPoints = 0;
      let todaysResultPoints = 0;
      let player = guess.player;
      guess.homeGuesses = guess.homeGuesses.replace(/[\[\]']/g, '');
      guess.awayGuesses = guess.awayGuesses.replace(/[\[\]']/g, '');

      matches.map((played) => {
        if (played.matchPlayed) {
          if (
            played.matchNumber == 5 ||
            played.matchNumber == 6 ||
            played.matchNumber == 7
          ) {
            if (
              guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 ==
              played.homeResult
            ) {
              todaysGoalPoints++;
            }
            if (
              guess.awayGuesses.split(',')[played.matchNumber - 1] * 1 ==
              played.awayResult
            ) {
              todaysGoalPoints++;
            }
            if (
              guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 ==
                played.homeResult &&
              guess.awayGuesses.split(',')[played.matchNumber - 1] * 1 ==
                played.awayResult
            ) {
              todaysResultPoints++;
              todaysResultPoints++;
            }
            if (
              played.homeResult == played.awayResult &&
              guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 ==
                guess.awayGuesses.split(',')[played.matchNumber - 1] * 1
            ) {
              todaysOutcomePoints++;
            }
            if (
              played.homeResult > played.awayResult &&
              guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 >
                guess.awayGuesses.split(',')[played.matchNumber - 1] * 1
            ) {
              todaysOutcomePoints++;
            }
            if (
              played.homeResult < played.awayResult &&
              guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 <
                guess.awayGuesses.split(',')[played.matchNumber - 1] * 1
            ) {
              todaysOutcomePoints++;
            }
          }
        }
      });

      let todaysTotal =
        todaysOutcomePoints + todaysGoalPoints + todaysResultPoints;
      guess.todaysOutcomePoints = todaysOutcomePoints;
      guess.todaysGoalPoints = todaysGoalPoints;
      guess.todaysResultPoints = todaysResultPoints;
      guess.todaysTotal = todaysTotal;
    });
    todaysPredictions = [...predictions].sort((a, b) =>
      a.todaysTotal > b.todaysTotal ? -1 : 1
    );
    console.log(todaysPredictions);
  }
  todaysScores();

  return (
    <>
      <div class="section-leauge-today">
        <div class="section-leauge__heading">
          <h1>Daily Standings</h1>
        </div>
        <div class="section-leauge__info">
          <h2>👑 Daily Winners List 👑</h2>
          <p>Fri/Sat 15th: Amy F and Kerry F (8pts)</p>
          <p>Sun 16th: Nicola F and Steve B (11pts) </p>
        </div>
        <div class="section-leauge__table">
          <table class="section-leauge__table__contents">
            <thead class="section-leauge__table__head">
              <tr>
                <th>Position</th>
                <th>Player</th>
                <th>Outcome Points</th>
                <th>Goal Points</th>
                <th>Result Points</th>
                <th>Total Points</th>
              </tr>
            </thead>
            {todaysPredictions.map((standing, key) => (
              <tbody class="section-leauge__body">
                <tr key={key}>
                  <td>{position++}</td>
                  <td>{standing.player}</td>
                  <td>{standing.todaysOutcomePoints}</td>
                  <td> {standing.todaysGoalPoints}</td>
                  <td>{standing.todaysResultPoints}</td>
                  <td>{standing.todaysTotal}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div
          onClick={() => window.location.replace('#header')}
          class="to_top_link"
        >
          <span>Back to Top</span>
        </div>
      </div>
    </>
  );
}
