import { SitemapStream, streamToPromise } from "sitemap";
import { serverQueryContent } from "#content/server";
const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: runtimeConfig.public.site_url,
  });
  sitemap.write("/");
  sitemap.write("/blog");
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
