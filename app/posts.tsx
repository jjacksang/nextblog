"use client";

import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const posts = [
    {
        id: "first post",
        date: "2024-08-05",
        title: "My first post",
    },
    {
        id: "two",
        date: "2024-08-05",
        title: "text2",
    },
    {
        id: "three",
        date: "2024-08-05",
        title: "test3",
    },
    {
        id: "four",
        date: "2024-08-05",
        title: "test4",
    },
    {
        id: "five",
        date: "2024-08-05",
        title: "test5",
    },
    {
        id: "six",
        date: "2024-08-05",
        title: "test6",
    },
    {
        id: "seven",
        date: "2024-08-05",
        title: "test7",
    },
    {
        id: "eight",
        date: "2024-08-05",
        title: "test8",
    },
    {
        id: "nine",
        date: "2024-08-05",
        title: "test9",
    },
    {
        id: "ten",
        date: "2024-08-05",
        title: "test10",
    },
];

const fetchPosts = async (): Promise<Post[]> => {
    const Posts = await prisma.post.findMany();
    return Posts;
};

type SortSetting = ["date" | "views", "desc" | "asc"];

export function Posts() {
    return (
        <main className="max-w-2xl m-auto font-mono text-sm ">
            <header className="text-gray-400 flex items-center">
                <span>date</span>
                <span className="grow pl-2">title</span>
                <span>views</span>
            </header>
            <List />
        </main>
    );
}

async function List() {
    const posts = await fetchPosts();
    return (
        <section className="flex flex-col font-mono">
            {posts.map((post: Post) => (
                <ul key={post.id} className="flex">
                    <li className="flex">{new Date(post.createDate).toLocaleDateString()}</li>
                    <li className="flex grow">{post.title}</li>
                </ul>
            ))}
        </section>
    );
}
