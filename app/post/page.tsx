"use client";

import { useState } from "react";

export function Post() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };
    return (
        <div className="flex flex-col gap-2">
            <div className="flex py-4">
                <span className="flex grow justify-center text-xl">
                    오늘은 어떤 글을 작성하실건가요?
                </span>

                <button className="border rounded-lg bg-white text-black p-4 py-1">작성</button>
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
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="content">내용</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={onChangeContent}
                    className="w-full h-[36rem] rounded-lg pl-3 py-1 text-black"
                />
            </div>
        </div>
    );
}

export default Post;
