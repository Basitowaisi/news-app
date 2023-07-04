import sortNewsByImage from "@/utils/sortNewsByImage"
import { gql } from "graphql-request"

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "in"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `

  const response = await fetch(
    "https://eloued.stepzen.net/api/warped-bird/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords,
        },
      }),
    }
  )

  const newsResponse = await response.json()

  const news = sortNewsByImage(newsResponse.data.myQuery)
  console.dir(news, { depth: 400 })

  return news
}

export default fetchNews
