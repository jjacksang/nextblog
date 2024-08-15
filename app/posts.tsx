"use client";

import React from "react";

import { IPost } from "./page";

interface PostProps {
    posts: IPost[];
}

export function Posts({ posts }: PostProps) {
    return (
        <main className="max-w-2xl m-auto font-mono text-sm ">
            <header className="text-gray-400 flex items-center gap-1">
                <span>date</span>
                <span className="grow pl-2">title</span>
                <span>views</span>
            </header>
            <List posts={posts} />
        </main>
    );
}

// Post테이블 데이터 생성 테스트 코드
// async function createPost() {
//     const response = await fetch(`http://localhost:3001/api/post`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             title: "테스트 제목",
//             content: "테스트 내용입니다.",
//         }),
//     });

//     if (response.ok) {
//         const newPost = await response.json();
//         console.log("Post created:", newPost);
//     } else {
//         console.error("Failed to create post");
//     }
// }

// 호출
// createPost();

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
    return (
        <section className="flex flex-col font-mono text-xs">
            {posts.map((post) => (
                <ul key={post.id} className="flex pt-3 border-b border-gray-500">
                    <li className="flex">
                        {new Date(post.createDate).toLocaleDateString("ko-KR", { year: "numeric" })}
                    </li>
                    <li className="flex grow pl-2">{post.title}</li>
                    <li>
                        {post.views.map((view) => (
                            <>{view.count}</>
                        ))}
                    </li>
                </ul>
            ))}
        </section>
    );
}
