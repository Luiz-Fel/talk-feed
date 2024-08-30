import styles from './Header.module.css';

import talkFeedLogo from '../assets/talkFeedLogo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={talkFeedLogo} alt="talk-feed logo" />
           <strong>Talk Feed</strong>
        </header>
    )
}