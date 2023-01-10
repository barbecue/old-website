import malScraper from 'mal-scraper';
const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    const List = await malScraper.getWatchListFromUser(runtimeConfig.mal_username, 0, 'anime');
    return {
        data: List.sort((anime1, anime2) => anime2.updatedAt-anime1.updatedAt).slice(0, 6)
    }
})