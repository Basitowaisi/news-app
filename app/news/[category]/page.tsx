import NewsList from "@/components/NewsList"
import { categories } from "@/constants"
import fetchNews from "@/lib/fetchNews"
import React from "react"

type Props = {
  params: { category: Category }
}

// prebuild all the pages for each category
export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }))
}

async function NewsCategoryPage({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category)
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  )
}

export default NewsCategoryPage
