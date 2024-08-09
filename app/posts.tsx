"use client";
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

type SortSetting = ["date" | "views", "desc" | "asc"];
console.log(posts);

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

function List() {
    return (
        <section className="flex flex-col font-mono">
            {posts.map((post) => (
                <ul key={post.id} className="flex">
                    <li className="flex">{post.date}</li>
                    <li className="flex grow">{post.title}</li>
                </ul>
            ))}
        </section>
    );
}
