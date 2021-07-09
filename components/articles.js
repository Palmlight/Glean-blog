import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  return (
    <div className="inner-container mt-10">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10">
        {articles.map((article, i) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          )
        })}
      </div>
    </div>
  )
}

export default Articles
