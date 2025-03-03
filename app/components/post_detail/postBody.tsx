import { IPost } from "@/app/type";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponents } from "../MdxComponents";
import remarkGfm from "remark-gfm";

interface Props {
    post: IPost;
}

export const PostBody = ({ post }: Props) => {
    return (
        <MDXRemote
            source={JSON.stringify(post.content)}
            components={MdxComponents}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                },
            }}
        />
    );
};
