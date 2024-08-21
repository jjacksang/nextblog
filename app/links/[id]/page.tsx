import { PrismaClient } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import Header from "./header";
import { IPost } from "@/app/type";

const PostContent = async (context: GetServerSidePropsContext) => {
    const prisma = new PrismaClient();
    const { id } = context.params!;

    const post: IPost | null = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: { views: true },
    });
    console.log(post);
    if (!post) {
        return <div>post content is null;</div>;
    }

    return (
        <article className="flex flex-col">
            <Header post={post} />

            <span>{post.content}</span>
        </article>
    );
};

export default PostContent;
