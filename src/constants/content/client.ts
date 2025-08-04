// src/constants/content/client.ts

import { 
  createClient, 
  type ContentfulClientApi,
} from "contentful";

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error("Missing Contentful credentials");
}

// Solution 1: Use DefaultModifiers
export const client: ContentfulClientApi<undefined> = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master'
});

// Utility function for type-safe content fetching
export async function fetchContentfulEntries<T>(contentType: string): Promise<T> {
  try {
    const entries = await client.getEntries({
      content_type: contentType
    });
    return entries as unknown as T;
  } catch (error) {
    console.error(`Error fetching Contentful entries for ${contentType}:`, error);
    throw error;
  }
}

// Export commonly used Contentful types
export type { Entry, Asset, EntryFields, EntrySkeletonType } from "contentful";