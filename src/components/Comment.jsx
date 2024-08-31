import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Luiz-Fel.png" />

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
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Very good Devon, congratulations!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
