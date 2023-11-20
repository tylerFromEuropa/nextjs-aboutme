import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-row font-mono my-4 items-baseline">
            <h1 className="grow text-3xl">
                <Link href="/">{">"}_Tyler</Link>
            </h1>
            <nav>
                <ul className="flex flex-row space-x-3 uppercase">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/portfolio">
                        <li>Portfolio</li>
                    </Link>
                    <li>
                        <a href="https://github.com/tylerfromeuropa" target="_blank">
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
