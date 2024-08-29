import type { MDXComponents } from "mdx/types";

export function useMDXComponent(component: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => <h1 className="font-2xl font-bold text-blue">{children}</h1>,

        ...component,
    };
}
