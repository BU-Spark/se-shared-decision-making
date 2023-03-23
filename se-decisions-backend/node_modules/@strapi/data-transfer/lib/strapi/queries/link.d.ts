import { ILink } from '../../../types';
export declare const createLinkQuery: (strapi: Strapi.Strapi, trx?: any) => () => {
    generateAll: (uid: string) => AsyncGenerator<ILink>;
    generateAllForAttribute: (uid: string, fieldName: string) => AsyncGenerator<ILink>;
    insert: (link: ILink) => Promise<void>;
};
