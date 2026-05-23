/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.module.css' {
    const content: { readonly [key: string]: string };
    export default content;
}
