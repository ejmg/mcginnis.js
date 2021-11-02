import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/

const postIds = [1,2,3,4,5,6,7,8]

function fetchPost (id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
}

function App() {

  const [loading, setLoading] = React.useState(true);
  const [idx, setIdx] = React.useState(0);
  const [error, setError] = React.useState(null);
  const [post, setPost] = React.useState(null);

  const incIdx = () => {
    setIdx((i) => 
      i === postIds.length - 1 
      ? i 
      : i + 1
  )};
  
  React.useEffect(() => {
    setLoading(true)

    fetchPost(postIds[idx])
    .then((post) => {
      setPost(post);
      setError(null);
      setLoading(false);
    })
    .catch((e) => {
      console.warn(e.message);
      setError('error fetching data');
      setLoading(false)
    })
  }, [idx]);

  if (loading === true) {
    return <p>loading...</p>
  }

  if (error) {
    return (<>
    <p>{error}</p>
    <button onClick={incIdx}>next post</button>
    </>)
  }

  return (
    <div className="App">
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    { idx === postIds.length - 1
      ? <p>no more posts</p>
      : <button onClick={incIdx}>load post</button>
    }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
