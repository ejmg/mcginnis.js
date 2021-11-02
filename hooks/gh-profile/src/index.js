import React from "react"
import ReactDOM from "react-dom"

function getGithubProfile (username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
}

function Profile({ username }) {

  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {

    getGithubProfile(username)
    .then(setProfile)
    //// if we had a subcriber model and had to cleanup effects between
    //// invocations...
    //// eg imagine we have `subscribe()` and `unsubscribe()` functions:
    // subscribe(username, setProfile);
    //// that we listen for via websockets etc
    //// whenever you return a function via React.useEffect(), that is
    //// used to cleanup whenever a component is removed from the DOM *and*
    //// **before** the effect is re-invoked
    // return () => {
    //   unsubscribe(username);
    //   setProfile(null);
    // }
  },[username])
  if (profile === null) {
    return <p>loading...</p>
  }
  return (
    <>
    <h1>@{profile.login}</h1>
    <img 
      src={profile.avatar_url}
      alt="idk"
      />
      <p>{profile.bio}</p>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Profile username='tylermcginnis'/>, rootElement);