import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Link from 'next/link'
import styles from './social.module.css'

export default function Social() {

    return (
        <ul className={styles.social}>
            <li>
                <Link href="http://github.com/eryanpatterson">
                    <a target="_blank"><FaGithub /></a>
                </Link>
            </li>
            <li>
                <Link href="http://www.linkedin.com/in/eryanpatterson/">
                    <a target="_blank"><FaLinkedin /></a>
                </Link>
            </li>
            <li>
                <Link href="http://twitter.com/eryanpatterson">
                    <a target="_blank"><FaTwitter /></a>
                </Link>
            </li>
        </ul>
    )
}