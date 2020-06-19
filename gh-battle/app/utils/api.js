const id = process.env.ID;
const secret = process.env.SECRET;
const params = `?client_id=${id}&client_secret=${secret}`;

function getErrorMsg (msg, user) {
  if (msg === "Not Found") {
    return `${user} doesn't exist`;
  }
  return msg;
}

function getProfile (username) {
  return fetch(`https://api.github.com/users/${username}${params}`)
    .then((res) => res.json())
    .then((profile) => {
      if (profile.message) {
        throw new Error(getErrorMsg(profile.message, username));
      }
      return profile;
    });
}


function getRepos (username) {
  return fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
    .then((res) => res.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(getErrorMsg(profile.message, username));
      }
      return repos;
  });
}

function getRepoStars (repos) {
  return repos.reduce((count, { stargazers_count }) => count + stargazers_count, 0);
}

function calcScore (followers, repos) {
  return (followers * 3) + getRepoStars(repos);
}

function getUserData (player) {
  return Promise.all([
    getProfile(player),
    getRepos(player)
  ]).then(([ profile, repos ]) => ({
    profile,
    score: calcScore(profile.followers, repos)
  }));
}

function sortPlayers (players) {
  return players.sort((a, b) => b.score - a.score);
}

export function battle (players) {
  return Promise.all([
    getUserData(players[0]),
    getUserData(players[1])
  ]).then((results) => sortPlayers(results));
}

export function fetchPopularRepos (lang) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }

      return data.items;
    });
}
