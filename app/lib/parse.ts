import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PostMatter } from "../type";
import dayjs from "dayjs";
import { sync } from "glob";

const BASE_PATH = "/app/mdx";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = async (postPath: string) => {
    const postAbstract = parsePostAbstract(postPath);
    const postDetail = parsePostDetail(postPath);
    return { ...postAbstract, ...postDetail };
};

export const parsePostAbstract = (postPath: string) => {
    const filePath = postPath
        .slice(postPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, "")
        .replace(".mdx", "");

    const [category, slug] = filePath.split("/");
    const url = `/${category}/${slug}`;

    return { url, category, slug };
};

const parsePostDetail = async (postPath: string) => {
    const file = fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(file);
    const grayMatter = data as PostMatter;
    const dateString = dayjs(grayMatter.date).locale("kr").format("YYYY년 MM월 DD일");

    return { ...grayMatter, dateString, content };
};

export const getPostList = (category?: string) => {
    const folder = category || "**";
    const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
    return paths;
};
