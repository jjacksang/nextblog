"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo() {
    const pathname = usePathname();

    return <span>{pathname === "/" ? <span>Jacksang</span> : <Link href="/">Jacksang</Link>}</span>;
}
