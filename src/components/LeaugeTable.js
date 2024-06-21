import React, { useState, useEffect } from 'react';
import supabase from './supabase';

export default function LeaugeTable({
  predictions,
  match1,
  match2,
  match3,
  match4,
  matches,
}) {
  let position = 1;
  let lastPlayed = '';

  function allScores() {
    predictions.map((guess) => {
      let outcomePoints = 0;
      let goalPoints = 0;
      let resultPoints = 0;
      let player = guess.player;
      guess.homeGuesses = guess.homeGuesses.replace(/[\[\]']/g, '');
      guess.awayGuesses = guess.awayGuesses.replace(/[\[\]']/g, '');
      //   guess.homeGuesses = guess.homeGuesses.split(',');
      //   guess.awayGuesses = guess.awayGuesses.split(',');
      //console.log('this is home guesses for testing', guess.homeGuesses);

      matches.map((played) => {
        if (played.matchPlayed) {
          lastPlayed = `${played.homeTeam} vs ${played.awayTeam}`;
          if (
            guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 ==
            played.homeResult
          ) {
            goalPoints++;
          }
          if (
            guess.awayGuesses.split(',')[played.matchNumber - 1] * 1 ==
            played.awayResult
          ) {
            goalPoints++;
          }
          if (
            guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 ==
              played.homeResult &&
            guess.awayGuesses.split(',')[played.matchNumber - 1] * 1 ==
              played.awayResult
          ) {
            resultPoints++;
            resultPoints++;
          }
          if (
            played.homeResult == played.awayResult &&
            guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 ==
              guess.awayGuesses.split(',')[played.matchNumber - 1] * 1
          ) {
            outcomePoints++;
          }
          if (
            played.homeResult > played.awayResult &&
            guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 >
              guess.awayGuesses.split(',')[played.matchNumber - 1] * 1
          ) {
            outcomePoints++;
          }
          if (
            played.homeResult < played.awayResult &&
            guess.homeGuesses.split(',')[played.matchNumber - 1] * 1 <
              guess.awayGuesses.split(',')[played.matchNumber - 1] * 1
          ) {
            outcomePoints++;
          }
        }
      });
      console.log('outcome points for ', guess.player, 'are =', outcomePoints);
      console.log('goal points for ', guess.player, 'are =', goalPoints);
      console.log('result points for ', guess.player, 'are =', resultPoints);

      let total = outcomePoints + goalPoints + resultPoints;
      guess.outcomePoints = outcomePoints;
      guess.goalPoints = goalPoints;
      guess.resultPoints = resultPoints;
      guess.total = total;
    });
    predictions = [...predictions].sort((a, b) => (a.total > b.total ? -1 : 1));
    console.log(predictions);
  }

  allScores();

  return (
    <>
      <div class="section-leauge">
        <div class="section-leauge__heading">
          <h1>Overall Leauge Standings</h1>
        </div>
        <div class="section-leauge__info section-leauge__info-overall">
          <p>
            Just a reminder of the scoring: <br />
            + 1 point for the correct match outcome (winning team/draw) <br />
            + 1 point for each teams match goals predicted correctly <br />+ 2
            points if you get the scoreline correct{' '}
          </p>
          <p class="section-leauge__info-overall__last-update">
            Last updated after: {lastPlayed}{' '}
          </p>
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
            {predictions.map((standing, key) => (
              <tbody class="section-leauge__body">
                <tr key={key}>
                  <td>{position++}</td>
                  <td>{standing.player}</td>
                  <td>{standing.outcomePoints}</td>
                  <td> {standing.goalPoints}</td>
                  <td>{standing.resultPoints}</td>
                  <td>{standing.total}</td>
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

//   async function updatePlayerPoints(
//     outcomePoints,
//     goalPoints,
//     resultPoints,
//     player
//   ) {
//     const { data, error } = await supabase
//       .from('Predictions')
//       .update({
//         outcomePoints: outcomePoints,
//         goalPoints: goalPoints,
//         resultPoints: resultPoints,
//       })
//       .eq('player', player);
//     //console.log('this has run');
//   }
//   updatePlayerPoints();

//   console.log(
//     'comparision part 1 -',
//     guess.homeGuesses.split(',')[played.matchNumber - 1] * 1,
//     'this is match ',
//     played.matchNumber,
//     'and player - ',
//     guess.player
//   );
//   console.log(guess.homeGuesses.split(','));
//   console.log(guess.homeGuesses.split(',')[played.matchNumber - 1] * 1);
//   console.log(typeof (guess.homeGuesses[played.matchNumber - 1] * 1));
//   console.log('comparision part 2 -', played.homeResult);
