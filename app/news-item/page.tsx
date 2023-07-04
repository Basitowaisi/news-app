import React from "react"
import { notFound } from "next/navigation"
import LiveTimeStamp from "@/components/LiveTimestamp"

type Props = {
  searchParams?: NewsEntry
}

function NewsItemPage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound()
  }
  console.log(Object.entries(searchParams).length)

  const newsItem: NewsEntry = searchParams

  return (
    <article>
      <section>
        {newsItem.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={newsItem.image}
            alt={newsItem.title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {newsItem.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {newsItem.author}</h2>
            <h2 className="font-bold pl-4">{newsItem.source}</h2>
            <p className="pl-4">
              <LiveTimeStamp time={newsItem.published_at} />
            </p>
          </div>
          <p className="pt-4">{newsItem.description}</p>
        </div>
      </section>
    </article>
  )
}

export default NewsItemPage
