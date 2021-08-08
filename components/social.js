import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Link from 'next/link'

export default function Social() {

    return (
        <ul>
            <li>
                <Link href="http://github.com/eryanpatterson">
                    <a><FaGithub /></a>
                </Link>
            </li>
            <li>
                <Link href="http://www.linkedin.com/in/eryanpatterson/">
                    <a><FaLinkedin /></a>
                </Link>
            </li>
            <li>
                <Link href="http://twitter.com/eryanpatterson">
                    <a><FaTwitter /></a>
                </Link>
            </li>
        </ul>
    )
}