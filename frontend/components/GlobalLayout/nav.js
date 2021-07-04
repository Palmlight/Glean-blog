import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div className="w-full fixed top-0 left-0 right-0 font-WorkSans bg-white z-30">
      <nav className=" flex inner-container items-center justify-between py-5">
        <Link href="/">
          <a className="text-gl-green font-bold text-2xl hover:no-underline hover:text-gl-green">
            GLEAN WELLNESS
          </a>
        </Link>

        <ul className="flex gap-10">
          {categories.map(category => {
            return (
              <li key={category.id}>
                <Link as={`/category/${category.slug}`} href="/category/[id]">
                  <a className="font-semibold text-base text-gray-700 hover:no-underline hover:text-gl-green transition-all">
                    {category.name.toUpperCase()}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
