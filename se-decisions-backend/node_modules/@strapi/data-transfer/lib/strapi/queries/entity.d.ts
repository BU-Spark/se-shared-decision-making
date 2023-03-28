import type { ContentTypeSchema } from '@strapi/strapi';
declare const createEntityQuery: (strapi: Strapi.Strapi) => (uid: string) => {
    create: <T extends {
        data: U;
    }, U extends object>(params: T) => Promise<any>;
    createMany: <T_1 extends {
        data: U_1[];
    }, U_1 extends object>(params: T_1) => Promise<{
        count: number;
    }>;
    deleteMany: <T_2 extends object>(params?: T_2 | undefined) => Promise<{
        count: number;
    } | null>;
    getDeepPopulateComponentLikeQuery: (contentType: ContentTypeSchema, params?: {
        select: string;
    }) => any;
    readonly deepPopulateComponentLikeQuery: any;
};
export { createEntityQuery };
