export default function TodaysPredictions({
  matches,
  predictions,
  match5,
  match6,
  match7,
}) {
  //console.log(predictions);

  return (
    <>
      <div class="section-todays-matches">
        <h1>Predictions for {match5.matchDate}</h1>
        <div class="section-todays-matches__box">
          <div class="match-table">
            <h2 class="match-table__header">
              {match5.homeTeam} vs {match5.awayTeam}{' '}
            </h2>
            <table class="match-table__contents">
              {predictions.map((guess, key) => (
                <tbody class="match-table__body">
                  <tr key={key}>
                    <td>{guess.player}</td>
                    <td class="match-table__gap"> </td>
                    <td>
                      {guess.homeGuesses.split(',')[match5.matchNumber - 1]}
                    </td>
                    <td> - </td>
                    <td>
                      {guess.awayGuesses.split(',')[match5.matchNumber - 1]}
                    </td>
                    {/* {console.log(guess)} */}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div class="match-table">
            <h2>
              {match6.homeTeam} vs {match6.awayTeam}{' '}
            </h2>
            <table class="match-table__contents">
              {predictions.map((guess, key) => (
                <tbody class="match-table__body">
                  <tr key={key}>
                    <td>{guess.player}</td>
                    <td class="match-table__gap"> </td>
                    <td>
                      {guess.homeGuesses.split(',')[match6.matchNumber - 1]}
                    </td>
                    <td> - </td>
                    <td>
                      {guess.awayGuesses.split(',')[match6.matchNumber - 1]}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div class="match-table">
            <h2>
              {match7.homeTeam} vs {match7.awayTeam}{' '}
            </h2>
            <table class="match-table__contents">
              {predictions.map((guess, key) => (
                <tbody class="match-table__body">
                  <tr key={key}>
                    <td>{guess.player}</td>
                    <td class="match-table__gap"> </td>
                    <td>
                      {guess.homeGuesses.split(',')[match7.matchNumber - 1]}
                    </td>
                    <td> - </td>
                    <td>
                      {guess.awayGuesses.split(',')[match7.matchNumber - 1]}
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
