import "./App.css";
import React, { useState, useEffect } from "react";
import Post from "./component/Post";
import User from "./component/User";

const url = "http://localhost:3020";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [select, setselect] = useState(true);

  async function proces() {
    const responsePost = await fetch(`${url}/posts`);
    const posts = await responsePost.json();
    setPosts(posts);
    const responseUser = await fetch(`${url}/users`);
    const user = await responseUser.json();
    setUsers(user);
  }
  useEffect(() => {
    proces();
  }, []);

  async function handelclick(Id) {
    const response = await fetch(`${url}/users/${Id}`);
    const dataUser = await response.json();
    setselect(dataUser);
  }

  return (
    <div>
      <Post post={posts} />

      <User
      user={users}
      handelclick={handelclick}
      select={select}
      />
    </div>
  );
}

export default App;
