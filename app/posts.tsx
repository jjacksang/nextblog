import React from "react";

import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function Posts() {
    return (
        <main className="max-w-2xl m-auto font-mono text-sm ">
            <header className="text-gray-400 flex items-center gap-1">
                <span>date</span>
                <span className="grow pl-2">title</span>
                <span>views</span>
            </header>
            <List />
        </main>
    );
}

async function createPost() {
    const response = await fetch(`http://localhost:3001/api/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "테스트 제목",
            content: "테스트 내용입니다.",
        }),
    });

    if (response.ok) {
        const newPost = await response.json();
        console.log("Post created:", newPost);
    } else {
        console.error("Failed to create post");
    }
}

// 호출
createPost();

function List() {
    return (
        <section className="flex flex-col font-mono text-xs">
            {/* {post.map((post: Post) => (
                <ul key={post.id} className="flex pt-1">
                    <li className="flex">
                        {new Date(post.createDate).toLocaleDateString("ko-KR", { year: "numeric" })}
                    </li>
                    <li className="flex grow pl-2">{post.title}</li>
                    <li></li>
                </ul>
            ))} */}
        </section>
    );
}
