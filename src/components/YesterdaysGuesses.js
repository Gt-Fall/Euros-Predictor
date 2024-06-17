export default function YesterdaysGuesses({
  matches,
  predictions,
  match1,
  match2,
  match3,
  match4,
}) {
  //console.log(predictions);
  let gameMatchnumber = 1;
  return (
    <>
      <div class="section-yesterdays-guesses">
        <h1 class="section-yesterdays-guesses__heading">
          Results for {match1.matchDate}
        </h1>
        <div class="section-yesterdays-guesses__box">
          <div class="match-table">
            <h2 class="match-table__header">
              {match1.homeTeam} vs {match1.awayTeam}
            </h2>
            <h2 class="match-table__header">
              {match1.homeResult} - {match1.awayResult}
            </h2>
            <table class="match-table__contents">
              {predictions.map((guess, key) => (
                <tbody class="match-table__body">
                  <tr key={key}>
                    <td>{guess.player}</td>
                    <td class="match-table__gap"> </td>
                    <td>
                      {guess.homeGuesses.split(',')[match1.matchNumber - 1]}
                    </td>
                    <td> - </td>
                    <td>
                      {guess.awayGuesses.split(',')[match1.matchNumber - 1]}
                    </td>
                    {/* {console.log(guess)} */}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div class="match-table">
            <h2>
              {match2.homeTeam} vs {match2.awayTeam}
            </h2>
            <h2 class="match-table__header">
              {match2.homeResult} -{match2.awayResult}
            </h2>
            <table class="match-table__contents">
              {predictions.map((guess, key) => (
                <tbody class="match-table__body">
                  <tr key={key}>
                    <td>{guess.player}</td>
                    <td class="match-table__gap"> </td>
                    <td>
                      {guess.homeGuesses.split(',')[match2.matchNumber - 1]}
                    </td>
                    <td> - </td>
                    <td>
                      {guess.awayGuesses.split(',')[match2.matchNumber - 1]}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div class="match-table">
            <h2>
              {match3.homeTeam} vs {match3.awayTeam}{' '}
            </h2>
            <h2 class="match-table__header">
              {match3.homeResult} - {match3.awayResult}
            </h2>
            <table class="match-table__contents">
              {predictions.map((guess, key) => (
                <tbody class="match-table__body">
                  <tr key={key}>
                    <td>{guess.player}</td>
                    <td class="match-table__gap"> </td>
                    <td>
                      {guess.homeGuesses.split(',')[match3.matchNumber - 1]}
                    </td>
                    <td> - </td>
                    <td>
                      {guess.awayGuesses.split(',')[match3.matchNumber - 1]}
                    </td>
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
      </div>
    </>
  );
}
