import supabase from './supabase';

export default function MatchesForm({ matches }) {
  const homeGuesses = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  const awayGuesses = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let playerName = 'No name';
  let playerEmail = 'No email';
  const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted');
    console.log(homeGuesses);
    console.log(awayGuesses);

    if (homeGuesses.length != 36 || awayGuesses.length != 36) {
      alert('Error Sending, missing scores. Try again ');
      window.location.reload();
    } else {
      async function sendPredictions() {
        const { data, error } = await supabase.from('Predictions').insert([
          {
            homeGuesses: homeGuesses,
            awayGuesses: awayGuesses,
            player: playerName,
            email: playerEmail,
          },
        ]);
      }
      sendPredictions();
      alert('Predictions Sending Sucessful!');
    }
  }

  return (
    <>
      <div class="section-match-select__box">
        <form class="section-match-select__form" onSubmit={handleSubmit}>
          {matches.map((match) => (
            <div class="section-match-select__form__match">
              <p class="section-match-select__form__match__heading">
                {match.matchDate} : Match {match.matchNumber}
              </p>
              <div class="section-match-select__form__home">
                <label for="M1-H">{match.homeTeam}</label>
                <select
                  id="M1-H"
                  class="section-match-select__form__home__options"
                  onChange={(e) =>
                    (homeGuesses[match.matchNumber - 1] = Number(
                      e.target.value
                    ))
                  }
                >
                  <option vlaue=""></option>
                  {scores.map((score) => (
                    <option key={score} value={score}>
                      {score}
                    </option>
                  ))}
                </select>
              </div>
              <p class="section-match-select__form_vs">Vs</p>
              <div class="section-match-select__form__away">
                <label for="M1-A">{match.awayTeam}</label>
                <select
                  id="M1-A"
                  class="section-match-select__form__away__options"
                  onChange={(e) =>
                    (awayGuesses[match.matchNumber - 1] = Number(
                      e.target.value
                    ))
                  }
                >
                  <option vlaue=""></option>
                  {scores.map((score) => (
                    <option key={score} value={score}>
                      {score}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <div class="section-match-select__submit">
            <div class="section-match-select__submit__closed">
              {' '}
              <p>Submission of Predictions is now closed.</p>
              <p> Results Page will be uploaded after Saturdays games</p>
            </div>

            {/* <label
              for="submit_name"
              class="section-match-select__submit__label"
            >
              Name
            </label>
            <input
              class="section-match-select__submit__name"
              id="submit_name"
              onChange={(e) => (playerName = e.target.value)}
            />
            <label
              for="submit_email"
              class="section-match-select__submit__label"
            >
              Email
            </label>
            <input
              class="section-match-select__submit__email"
              id="submit_email"
              onChange={(e) => (playerEmail = e.target.value)}
            />
            <button class="section-match-select__submit__button">
              Submit Predictions
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
}
