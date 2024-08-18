"use client";

import React from "react";

import { IPost } from "./page";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PostProps {
    posts: IPost[];
}

export function Posts({ posts }: PostProps) {
    return (
        <main className="max-w-2xl m-auto font-mono text-sm ">
            <header className="text-gray-400 flex items-center gap-1 border-b py-1">
                <span>date</span>
                <span className="grow pl-2">title</span>
                <span>views</span>
            </header>
            <List posts={posts} />
        </main>
    );
}

// Post 테이블 데이터 가져오기 테스트 코드

// async function getPosts() {
//     const res = await fetch(`http://localhost:3001/api/get`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });

//     if (res.ok) {
//         const posts = await res.json();
//         console.log("GET Post", posts);
//         return posts;
//     } else {
//         console.error("Failed to Get Post");
//     }
// }

// getPosts();

function List({ posts }: PostProps) {
    const router = useRouter();
    const handlePostLink = () => {
        // router.push(<PostContent/>)
    };
    return (
        <section className="flex flex-col font-mono text-sm">
            {posts.map((post) => (
                <Link key={post.id} href="/" passHref>
                    <ul className="flex pt-3 border-b border-gray-500">
                        <li className="flex">
                            {new Date(post.createDate).toLocaleDateString("ko-KR", {
                                year: "numeric",
                            })}
                        </li>
                        <li className="flex grow pl-2">{post.title}</li>
                        {post.views.map((view) => (
                            <span key={view.id}>{view.count}</span>
                        ))}
                    </ul>
                </Link>
            ))}
        </section>
    );
}
