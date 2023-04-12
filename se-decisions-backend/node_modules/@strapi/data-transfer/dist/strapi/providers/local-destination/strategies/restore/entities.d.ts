/// <reference types="node" />
import type { SchemaUID } from '@strapi/strapi/lib/types/utils';
import { Writable } from 'stream';
import type { Transaction } from '../../../../../../types';
interface IEntitiesRestoreStreamOptions {
    strapi: Strapi.Strapi;
    updateMappingTable<T extends SchemaUID | string>(type: T, oldID: number, newID: number): void;
    transaction?: Transaction;
}
declare const createEntitiesWriteStream: (options: IEntitiesRestoreStreamOptions) => Writable;
export { createEntitiesWriteStream };
