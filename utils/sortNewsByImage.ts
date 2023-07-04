export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.data.filter(
    (newsEntry) => newsEntry.image !== null
  )
  const newsWithoutImage = news.data.filter(
    (newsEntry) => newsEntry.image === null
  )

  return {
    data: [...newsWithImage, ...newsWithoutImage],
    pagination: news.pagination,
  }
}
