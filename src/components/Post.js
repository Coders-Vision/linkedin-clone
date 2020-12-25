import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { forwardRef } from "react";
import InputOptions from "../components/InputOptions";
import "../styles/post.css";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="postHeader">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>
      <div className="postButtons">
        <InputOptions title={"Like"} Icon={ThumbUpAltOutlined} color="gray" />
        <InputOptions title={"Comment"} Icon={ChatOutlined} color="gray" />
        <InputOptions title={"Share"} Icon={ShareOutlined} color="gray" />
        <InputOptions title={"Send"} Icon={SendOutlined} color="gray" />
      </div>
    </div>
  );
});

export default Post;
