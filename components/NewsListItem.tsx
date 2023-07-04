import Image from "next/image"
import React from "react"
import ReadMoreButton from "./ReadMoreButton"
import LiveTimeStamp from "./LiveTimestamp"

type Props = {
  newsItem: NewsEntry
}

function NewsListItem({ newsItem }: Props) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out">
      {newsItem.image && (
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{newsItem.title}</h2>
          <section className="flex-1 mt-2">
            <p className="text-xs line-clamp-2">{newsItem.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italice text-gray-400">
            <p>{newsItem.source} -</p>
            <p>
              <LiveTimeStamp time={newsItem.published_at} />
            </p>
          </footer>
        </div>
        <ReadMoreButton item={newsItem} />
      </div>
    </article>
  )
}

export default NewsListItem
