import { PrismaClient } from "@prisma/client";
import Header from "../../components/post_detail/header";
import { PostBody } from "@/app/components/post_detail/postBody";

const PostContent = async ({ params }: { params: { id: string | string[] } }) => {
    const prisma = new PrismaClient();
    console.log(params.id);
    const post = await prisma.post.findUnique({
        where: { id: Number(params.id) },
        include: { views: true },
    });

    if (post) {
        const existView = await prisma.view.findUnique({
            where: { id: Number(params.id) },
        });

        if (existView) {
            await prisma.view.update({
                where: { postId: Number(params.id) },
                data: {
                    count: {
                        increment: 1,
                    },
                },
            });
        }
    }

    const MdxContent = post?.content as string;

    console.log(post);
    if (!post) {
        return <div>post content is null;</div>;
    }

    return (
        <div>
            <Header post={post} />
            <article className="flex flex-col">
                <PostBody post={post} />
            </article>
        </div>
    );
};

export default PostContent;
