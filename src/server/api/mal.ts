import malScraper from 'mal-scraper';

export default defineEventHandler(async (event) => {
    const List = await malScraper.getWatchListFromUser('baybeku', 0, 'anime');
    return {
        data: List.sort((anime1, anime2) => anime2.updatedAt-anime1.updatedAt).slice(0, 5)
    }
})