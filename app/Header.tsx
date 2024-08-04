import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="flex items-center p-6 font-mono">
            <Logo />
            <nav className="grow justify-end flex gap-2 items-center">
                <Link href="/about">About</Link>

                <a href="https://velog.io/@jjacksang/posts" target="_blank">
                    Velog
                </a>
            </nav>
        </header>
    );
}
