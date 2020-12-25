import { React, useState, useEffect } from "react";
import "../styles/feed.css";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import InputOptions from "../components/InputOptions";
import Post from "./Post";
import firebase from "firebase";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feeds() {
  const [inputMesssage, setInputMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const userData = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((docs) => ({
            id: docs.id,
            data: docs.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: userData.displayName,
      description: userData.email,
      message: inputMesssage,
      photoURL: userData.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputMessage("");
  };

  return (
    <div className="feed">
      <div className="inputPost">
        <div className="inputContainer">
          <Create />
          <form method="post">
            <input
              type="text"
              onChange={(e) => setInputMessage(e.target.value)}
              value={inputMesssage}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="options">
          <InputOptions title={"Photo"} Icon={Image} color="#70B5F9" />
          <InputOptions title={"Video"} Icon={Subscriptions} color="#E7A33E" />
          <InputOptions title={"Event"} Icon={EventNote} color="#C0CBCD" />
          <InputOptions
            title={"Write article"}
            Icon={CalendarViewDay}
            color="#7FC15E"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feeds;
