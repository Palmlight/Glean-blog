import React from "react"
import Link from "next/link"
import { AiFillYoutube, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai"
import { FaPinterestP } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <div className="place-self-end bg-black mt-20 py-10 w-full space-y-5">
      <div className="inner-container text-yellow-200 flex flex-col lg:flex-row justify-between items-center mb-5">
        <p className="text-2xl text-gl-green font-semibold">GLEAN WELLNESS</p>

        <div className="flex gap-2 lg:gap-5 items-center flex-col lg:flex-row mt-5 lg:mt-0">
          <Link href="/" as="/">
            <a className="text-white text-lg font-semibold hover:no-underline hover:text-gl-green transition-all">
              Home
            </a>
          </Link>
          <Link href="/articles" as="/articles">
            <a className="text-white text-lg font-semibold hover:no-underline hover:text-gl-green transition-all">
              Articles
            </a>
          </Link>
          <Link href="/about" as="/about">
            <a className="text-white text-lg font-semibold hover:no-underline hover:text-gl-green transition-all">
              About Us
            </a>
          </Link>
          <Link href="/contact" as="/contact">
            <a className="text-white text-lg font-semibold hover:no-underline hover:text-gl-green transition-all">
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row inner-container items-center justify-between">
        <div className="flex gap-4 items-center">
          <a href="https://pin.it/3wgLIvP">
            <FaPinterestP className="text-2xl text-gl-green" />
          </a>
          <a href="https://pin.it/3wgLIvPhttps://www.facebook.com/9jahealthytips/">
            <AiFillFacebook className="text-2xl text-gl-green" />
          </a>
          <a href="http://www.instagram.com/9jahealthytips">
            <FiInstagram className="text-2xl text-gl-green" />
          </a>
          <a href="http://twitter.com/9jahealthytips/">
            <AiOutlineTwitter className="text-2xl text-gl-green" />
          </a>
        </div>

        <p className="text-white mt-2 lg:mt-0">2021 Glean Wellness</p>
      </div>
    </div>
  )
}

export default Footer
