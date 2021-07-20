import React from "react"
import Link from "next/link"

const CarouselCard = ({ article }) => {
  return (
    <div className="w-full">
      <div
        className="h-30vh lg:h-40vh min-h-l-hero bg-no-repeat bg-center bg-cover py-10 lg:py-20 flex items-end"
        style={{
          backgroundImage: `url(${article.image})`,
          maxHeight: 1200
        }}
      >
        <div className="inner-container space-y-4 text-left">
          <h2 className="text-gl-green capitalize text-lg font-semibold ">
            {article.category?.name}{" "}
            {/* <span className="carousel-name">&#8226; {article.readTime}</span> */}
          </h2>
          <h1 className="text-white text-4xl font-semibold w-10/12 lg:w-1/2 truncate">
            {article.title}
          </h1>
          <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a className="px-3 py-2 rounded-sm font-semibold bg-gl-green text-white inline-block hover:no-underline hover:text-white hover:bg-opacity-95">
              Read Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
