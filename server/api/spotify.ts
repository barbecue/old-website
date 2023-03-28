import spotifyWebApi from "spotify-web-api-node";
const runtimeConfig = useRuntimeConfig();
const spotifyApi = new spotifyWebApi();
spotifyApi.setCredentials({
  clientId: runtimeConfig.client_id,
  clientSecret: runtimeConfig.client_secret,
});

spotifyApi.setRefreshToken(runtimeConfig.refresh_token);

spotifyApi.refreshAccessToken().then(function (data) {
  spotifyApi.setAccessToken(data.body.access_token);
});

export default defineEventHandler(async (event) => {
  const List = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 });
  const recentlyPlayed = List.body.items
    .map(({ track }) => ({ ...track }))
    .map(({ album, name, id }) => ({ ...album, name, id }))
    .map(({ images, external_urls, artists, name, id }) => ({
      images,
      external_urls,
      artists,
      name,
      id,
    }))
    .map(({ images, external_urls, artists, name, id }) => ({
      image: images[1].url,
      external_urls,
      artists,
      name,
      id,
    }));
  return {
    data: recentlyPlayed
      .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i)
      .slice(0, 6),
  };
});
