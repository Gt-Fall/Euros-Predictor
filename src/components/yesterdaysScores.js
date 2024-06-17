import React, { useState, useEffect } from 'react';

export default function YesterdaysScores({
  matches,
  match1,
  match2,
  match3,
  match4,
}) {
  return (
    <>
      <div class="section-scores">
        <div class="section-scores__box">
          <h1 class="section-scores__box__heading">Results</h1>
          <div class="section-scores__box__match--1">
            <p class="section-scores__box__match--1__heading">
              {match1.matchDate} : Match {match1.matchNumber}
            </p>
            <div class="section-scores__box__match--1__home">
              <p>
                {match1.homeTeam} - {match1.homeResult}
              </p>
            </div>
            <p class="section-scores__box__match--1__vs">Vs</p>
            <div class="section-scores__box__match--1__away">
              <p>
                {match1.awayTeam} - {match1.awayResult}
              </p>
            </div>
          </div>

          <div class="section-scores__box__match--1">
            <p class="section-scores__box__match--1__heading">
              {match2.matchDate} : Match {match2.matchNumber}
            </p>
            <div class="section-scores__box__match--1__home">
              <p>
                {match2.homeTeam} - {match2.homeResult}
              </p>
            </div>
            <p class="section-scores__box__match--1__vs">Vs</p>
            <div class="section-scores__box__match--1__away">
              <p>
                {match2.awayTeam} - {match2.awayResult}
              </p>
            </div>
          </div>

          <div class="section-scores__box__match--1">
            <p class="section-scores__box__match--1__heading">
              {match3.matchDate} : Match {match3.matchNumber}
            </p>
            <div class="section-scores__box__match--1__home">
              <p>
                {match3.homeTeam} - {match3.homeResult}
              </p>
            </div>
            <p class="section-scores__box__match--1__vs">Vs</p>
            <div class="section-scores__box__match--1__away">
              <p>
                {match3.awayTeam} - {match3.awayResult}
              </p>
            </div>
          </div>
          {/* <div class="section-scores__box__match--1  section-scores__box__hidden">
            <p class="section-scores__box__match--1__heading">
              {match4.matchDate} : Match {match4.matchNumber}
            </p>
            <div class="section-scores__box__match--1__home">
              <p>
                {match4.homeTeam} - {match4.homeResult}
              </p>
            </div>
            <p class="section-scores__box__match--1__vs">Vs</p>
            <div class="section-scores__box__match--1__away">
              <p>
                {match4.awayTeam} - {match4.awayResult}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
