import styles from "./Avatar.module.css";

export function Avatar({ imageUrl, borderless = false }) {
  return (
    <img
      className={borderless ? styles.avatarBorderless : styles.avatar}
      src={imageUrl}
    />
  );
}
