import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ comment, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  const { content, id } = comment;
  function handleDeleteComment(commentId) {
    onDeleteComment(commentId)
  }

  function handleLikeCount() {
    setLikeCount((likeCountState) => {
      return likeCountState + 1;
    });
  }


  return (
    <div className={styles.comment}>
      <Avatar borderless imageUrl="https://github.com/Luiz-Fel.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Pereira</strong>
              <time
                dateTime="2024-11-08 08:13:30am"
                title="August 11th at 8:13 am"
              >
                Posted 1 hour ago
              </time>
            </div>
            <button title="Delete comment" onClick={() => handleDeleteComment(id)}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20} /> Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
