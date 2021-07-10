import React, { useState } from "react"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
// import Image from "next/image"

const Nav = ({ categories }) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="w-full fixed top-0 left-0 right-0 font-WorkSans bg-white z-30 shadow-md">
      <nav className=" flex inner-container items-center justify-between py-5 relative ">
        <Link href="/" as="/">
          {/* <a className="text-gl-green font-bold text-2xl hover:no-underline hover:text-gl-green">
            GLEAN WELLNESS
          </a> */}

          <img
            className="h-12 w-auto"
            src="https://res.cloudinary.com/glean-wellness/image/upload/v1625767635/Article%20Images/WhatsApp_Image_2021-07-08_at_18.55.58_i6ezuq.jpg"
          />
        </Link>

        <ul className="hidden lg:flex gap-10 ">
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

        {openMenu ? (
          <AiOutlineClose
            className="text-3xl lg:hidden font-semibold"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <GiHamburgerMenu
            className="text-3xl lg:hidden"
            onClick={() => setOpenMenu(true)}
          />
        )}
      </nav>
      {openMenu && (
        <div className="mobile-nav lg:hidden fixed bg-black w-full top-20 left-0 bottom-0 right-0">
          <div className="inner-container py-10">
            <ul className="flex-col flex gap-10 ">
              {categories.map(category => {
                return (
                  <li key={category.id}>
                    <Link
                      as={`/category/${category.slug}`}
                      href="/category/[id]"
                    >
                      <a
                        className="font-semibold text-base text-gl-green hover:no-underline hover:text-gl-green transition-all"
                        onClick={() => setOpenMenu(false)}
                      >
                        {category.name.toUpperCase()}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav
