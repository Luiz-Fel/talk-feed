import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { elapsedTime, formatDate } from "../utils/dateFormat.js";
import { useState } from "react";
export function Post({ author, content: postContent, publishedAt }) {
  const { name, role, avatar } = author;

  const [comments, setComments] = useState([
    { content: "Very good Devon, congratulations!! 👏👏" },
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const formattedDate = formatDate(publishedAt);

  const elapsedTimeDate = elapsedTime(publishedAt);

  function handlePostComment(comment) {
    const textComment = comment.target.comment.value;
    event.preventDefault();
    setComments([
      ...comments,
      {
        author: author,
        content: newCommentText,
      },
    ]);

    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageUrl={avatar} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time dateTime={publishedAt} title={formattedDate}>
          {elapsedTimeDate}
        </time>
      </header>

      <div className={styles.content}>
        {postContent.map((item) => {
          const { type, content, href, id } = item;
          if (type === "link" && href !== undefined) {
            return (
              <a key={href + id} href={href}>
                {content}
              </a>
            );
          } else if (type === "hashtags") {
            return (
              <p key={"hashtag " + id}>
                {content.map((hashtag, hashtagIndex) => (
                  <a key={hashtag.href + hashtagIndex} href={hashtag.href}>
                    {hashtag.content}
                  </a>
                ))}
              </p>
            );
          } else {
            return <p key={item.content}>{item.content}</p>;
          }
        })}
      </div>

      <form
        onSubmit={(event) => handlePostComment(event)}
        className={styles.commentForm}
      >
        <strong>Leave your comment</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Write a comment..."
        />
        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              author={comment?.authot}
              content={comment?.content}
            />
          );
        })}
      </div>
    </article>
  );
}
