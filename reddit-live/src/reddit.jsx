import axios from "axios";
import React, { useEffect, useState } from "react";
import Counter from "./counter";

export default function Reddit() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);
  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map((posts) => {
          return <li key={posts.id}>{posts.title}</li>;
        })}
      </ul>
      <Counter />
    </div>
  );
}
