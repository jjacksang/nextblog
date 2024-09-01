"use client";

import { IPost } from "@/app/type";

interface HeaderProps {
    post: IPost;
}

export default async function Header({ post }: HeaderProps) {
    const totalViews = post.views.reduce((total, view) => total + view.count, 0);

    if (!post) return null;

    return (
        <header className="mb-4 flex">
            <div className="flex flex-col grow text-lg">
                <span>{post?.title}</span>
                <span className="text-gray-400">
                    {new Date(post.createDate).toLocaleDateString("ko-KR")}
                </span>
            </div>
            <span className="flex items-center text-sm text-gray-400">views : {totalViews}</span>
        </header>
    );
}
