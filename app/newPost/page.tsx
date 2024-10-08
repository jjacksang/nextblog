"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { PrismaClient } from "@prisma/client";

export function Post() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const router = useRouter();

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const onSubmit = async () => {
        const res = await fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: { markdown: content },
            }),
        });

        if (!res.ok) {
            throw new Error();
        }
        // const prisma = new PrismaClient();
        // const res = await prisma.post.create({
        //     data: {
        //         title: title,
        //         content: { markdown: content },
        //         views: {
        //             create: {
        //                 count: 1,
        //             },
        //         },
        //     },
        // });
        console.log("post is success");
        window.alert("작성이 완료되었습니다.");
        router.push("/");

        return res.json();
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex py-4">
                <span className="flex grow justify-center text-xl">
                    오늘은 어떤 글을 작성하실건가요?
                </span>

                <button
                    onClick={onSubmit}
                    className="border rounded-lg bg-white text-black p-4 py-1"
                >
                    포스팅
                </button>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="title" className="w-full">
                    제목
                </label>
                <input
                    value={title}
                    onChange={onChangeTitle}
                    type="text"
                    className="rounded-lg pl-3 py-1 text-black"
                    required
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="content">내용</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={onChangeContent}
                    className="w-full h-[36rem] rounded-lg pl-3 py-1 text-black"
                    required
                />
            </div>
        </div>
    );
}

export default Post;
