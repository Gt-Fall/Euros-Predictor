import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Results from './pages/Results';
import supabase from './components/supabase';
import './css/style.css';

export default function App() {
  const [matches, setMatches] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [match1, setMatch1] = useState({});
  const [match2, setMatch2] = useState({});
  const [match3, setMatch3] = useState({});
  const [match4, setMatch4] = useState({});
  const [match5, setMatch5] = useState({});
  const [match6, setMatch6] = useState({});
  const [match7, setMatch7] = useState({});

  useEffect(function () {
    async function getMatches() {
      const { data: games, error } = await supabase.from('Matches').select('*');
      const gameArray = [...games].sort((a, b) =>
        a.matchNumber < b.matchNumber ? -1 : 1
      );
      setMatches(gameArray);
    }
    getMatches();

    async function getPredictions() {
      const { data: predict, error } = await supabase
        .from('Predictions')
        .select('*');
      setPredictions(predict);
    }
    getPredictions();
  }, []);

  useEffect(
    function () {
      function getYesterdaysMatches() {
        matches.forEach((match) => {
          if (match.matchNumber === 16) {
            setMatch1({
              matchDate: match.matchDate,
              matchNumber: match.matchNumber,
              homeTeam: match.homeTeam,
              awayTeam: match.awayTeam,
              homeResult: match.homeResult,
              awayResult: match.awayResult,
            });
          } else if (match.matchNumber === 17) {
            setMatch2({
              matchDate: match.matchDate,
              matchNumber: match.matchNumber,
              homeTeam: match.homeTeam,
              awayTeam: match.awayTeam,
              homeResult: match.homeResult,
              awayResult: match.awayResult,
            });
          } else if (match.matchNumber === 18) {
            setMatch3({
              matchDate: match.matchDate,
              matchNumber: match.matchNumber,
              homeTeam: match.homeTeam,
              awayTeam: match.awayTeam,
              homeResult: match.homeResult,
              awayResult: match.awayResult,
            });
          } else if (match.matchNumber === 4) {
            setMatch4({
              matchDate: match.matchDate,
              matchNumber: match.matchNumber,
              homeTeam: match.homeTeam,
              awayTeam: match.awayTeam,
              homeResult: match.homeResult,
              awayResult: match.awayResult,
            });
          }
        });
      }
      getYesterdaysMatches();
    },
    [matches]
  );

  useEffect(
    function () {
      function getTodaysMatches() {
        matches.forEach((match) => {
          if (match.matchNumber === 19) {
            setMatch5({
              matchDate: match.matchDate,
              matchNumber: match.matchNumber,
              homeTeam: match.homeTeam,
              awayTeam: match.awayTeam,
            });
          } else if (match.matchNumber === 20) {
            setMatch6({
              matchDate: match.matchDate,
              matchNumber: match.matchNumber,
              homeTeam: match.homeTeam,
              awayTeam: match.awayTeam,
            });
          } else if (match.matchNumber === 21) {
            setMatch7({
              matchDate: match.matchDate,
              matchNumber: match.matchNumber,
              homeTeam: match.homeTeam,
              awayTeam: match.awayTeam,
            });
          }
        });
      }
      getTodaysMatches();
    },
    [predictions]
  );

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Results
              matches={matches}
              predictions={predictions}
              match1={match1}
              match2={match2}
              match3={match3}
              match4={match4}
              match5={match5}
              match6={match6}
              match7={match7}
            />
          }
        />
        <Route path="guesses" element={<Home matches={matches} />} />
      </Routes>
    </>
  );
}
