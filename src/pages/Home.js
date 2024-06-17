import MatchesForm from '../components/MatchesForm';

export default function Home({ matches, predictions }) {
  // console.log(predictions);

  return (
    <>
      <body>
        <header class="header">
          <h1 class="header__text">Euro's Score Predictor</h1>;
        </header>

        <div class="section_information">
          <h2 class="section_information__sub-header">
            Welcome to the Euros score predictor!
          </h2>
          <p class="section_information__text">
            Select scores for all 36 group matches in one go or they will not be
            submitted. Add your name in the box next to the submit button, so
            your predictions can be identified. Email is completley optional, if
            you add it, I will send you a welcome email and let you know of any
            site problems. <br />
            <br />
            This predictor has been build by myself (Graeme) to sharpen my web
            development skills after graduating from uni. If there are small
            errors I apologies, I only had the idea for this 10 days before the
            start of the euros!
            <br />
            <br />
            This page will be visible until the start of the first game on
            Friday the 14th. It will then be replaced with a league table and
            everyones predictions for the day.
          </p>
        </div>

        <div class="section-rules">
          <div class="section-rules__left">
            <h3 class="smaller-heading">The Rules</h3>
            <p class="section-rules__text">
              The following points are awarded on each match: <br /> <br />+ 1
              point for the correct match outcome (winning team/draw) <br />+ 1
              point for each teams match goals predicted correctly
              <br />+ 2 points if you get the scoreline correct <br />
            </p>
          </div>
          <div class="section-rules__right">
            <h3 class="smaller-heading">Examples</h3>
            <p class="section-rules__text">
              You predict Home 1 Away 0 <br /> <br />- Actual score: Home 3 Away
              2 = 1 point for outcome of match. <br />- Actual socre: Home 1
              Away 1 = 1 point for correct home team goals
              <br />
              -Actual score: Home 1 Away 0 = 5 points (max), 1 for result, 1 for
              home goals, 1 for away goals and 2 for correct result. <br />
            </p>
          </div>
        </div>

        <div class="section-match-select">
          <MatchesForm matches={matches} />
        </div>
      </body>
    </>
  );
}
