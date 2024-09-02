import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageUrl="https://github.com/Luiz-Fel.png"
          />
          <div className={styles.authorInfo}>
            <strong>Luiz Pereira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2024-11-08 08:13:30am" title="August 11th at 8:13 am">
          Posted 1 hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hey guys 👋</p>
        <p>
          I just uploaded another project to my portfolio. It's a project I did
          at NLW Return, a Rocketseat event. The name of the project is
          DoctorCare 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#newproject</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
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
