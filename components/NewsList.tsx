import React from "react"
import NewsListItem from "./NewsListItem"

type Props = {
  news: NewsResponse
}

function NewsList({ news }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.data.map((newsItem, index) => (
        <NewsListItem key={`${newsItem.title}${index}`} newsItem={newsItem} />
      ))}
    </main>
  )
}

export default NewsList
