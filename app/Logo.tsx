"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo() {
    const pathname = usePathname();

    return (
        <span>
            {pathname === "/" ? (
                <span>Jacksang</span>
            ) : (
                <Link href="/" className="hover:bg-neutral-600 p-2 rounded-md">
                    Jacksang
                </Link>
            )}
        </span>
    );
}
