import React from "react"
import Link from "next/link"
import Image from "./image"
import { truncateString } from "../lib/helpers"

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a className="uk-link-reset">
        <div className="w-full h-56 lg:h-72 shadow-md rounded-lg">
          <img
            src={article.image}
            className="object-cover h-3/6 lg:h-4/6 rounded-t-lg w-full"
          />
          <div className="mt-2 px-3 lg:px-5">
            <p
              id="category"
              className="text-gl-green capitalize font-medium text-sm my-1"
            >
              {article.category?.name}
            </p>
            <p id="title" className=" text-black font-WorkSans font-medium">
              {truncateString(article.title, 29)}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
