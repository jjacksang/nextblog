import { JsonValue } from "@prisma/client/runtime/library";

export interface IPost {
    id: number;
    title: string;
    content: JsonValue | null;
    createDate: Date;
    update_at?: Date | null;
    views: IView[];
}

interface IContent {
    markdown: JsonValue;
}

interface IView {
    id: number;
    postId: number;
    count: number;
}
