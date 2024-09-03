import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { elapsedTime, formatDate } from "../utils/dateFormat.js";
export function Post({ author, content: postContent, publishedAt }) {
  const { name, role, avatar } = author;

  const formattedDate = formatDate(publishedAt);

  const elapsedTimeDate = elapsedTime(publishedAt);

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
        {postContent.map((item, index) => {
          const { type, content, href } = item;
          if (type === "link" && href !== undefined) {
            return (
              <a key={href} href={href}>
                {content}
              </a>
            );
          } else if (type === "hashtags") {
            return (
              <p key={"hashtag " + index}>
                {content.map((hashtag) => (
                  <a key={hashtag.href} href={hashtag.href}>
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

      <form className={styles.commentForm}>
        <strong>Leave your comment</strong>
        <textarea placeholder="Write a comment..." />
        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
