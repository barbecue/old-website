export default async () => {
  return await $fetch("/api/sitemap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
