import styles from './navigation.module.css'
import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <Link href="#home">Homepage</Link>
                <Link href="#home">About Me</Link>
                <Link href="#news">News</Link>
                <Link href="#publications">Publications</Link>
                <Link href="#honors">Honors and Awards</Link>
                <Link href="#education">Education</Link>
                {/* <Link href="#talks">Invited Talks</Link>
                <Link href="#internships">Internships</Link> */}
                {/* <div className={styles.dropdown}>
                    <p>Dropdown</p>
                </div> */}
            </div>
        </nav>
    )
}

