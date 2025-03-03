import { getPostList } from "@/app/lib/parse";
import { Post } from "@/app/type";

export const PostListPage = async ({ category }: { category: string }) => {
    const postList = getPostList(category);
    console.log(postList);

    return (
        <div>
            <ul>
                {postList.map((post) => (
                    <PostCard post={post} />
                ))}
            </ul>
        </div>
    );
};

interface Props {
    post: Post;
}

const PostCard = ({ post }: Props) => {
    return (
        <div>
            <div>{post.url}</div>
            <div>{post.title}</div>
        </div>
    );
};
