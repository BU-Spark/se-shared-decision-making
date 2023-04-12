/// <reference types="lodash" />
import type { Schema } from '@strapi/strapi';
/**
 * Sanitize a schemas dictionnary by omiting unwanted properties
 * The list of allowed properties can be found here: {@link VALID_SCHEMA_PROPERTIES}
 */
export declare const mapSchemasValues: (schemas: Record<string, Schema>) => import("lodash").Dictionary<Partial<Schema>>;
