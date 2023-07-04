"use client"
import { useRouter } from "next/navigation"
import React from "react"

type Props = {
  item: NewsEntry
}

function ReadMoreButton({ item }: Props) {
  const router = useRouter()

  function handleClick() {
    const queryString = Object.entries(item)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")

    router.push(`/news-item?${queryString}`)
  }

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  )
}

export default ReadMoreButton
