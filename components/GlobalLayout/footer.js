import React from "react"
import Link from "next/link"
import { AiFillYoutube, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai"
import { FaPinterestP } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <div className="place-self-end bg-black mt-20 py-10 w-full space-y-5 font-WorkSans">
      <div className="inner-container text-yellow-200 flex flex-col lg:flex-row justify-between items-center mb-5">
        <p className="text-lg lg:text-2xl text-gl-green font-semibold font-WorkSans">
          GLEAN WELLNESS
        </p>

        <div className="flex gap-2 lg:gap-5 items-center flex-row mt-5 lg:mt-0 font-WorkSans">
          <Link href="/" as="/">
            <a className="text-white text-sm lg:text-lg font-semibold hover:no-underline hover:text-gl-green transition-all">
              Home
            </a>
          </Link>
          <Link href="/articles" as="/articles">
            <a className="text-white text-sm lg:text-lg font-semibold hover:no-underline hover:text-gl-green transition-all">
              Articles
            </a>
          </Link>
          <Link href="/about" as="/about">
            <a className="text-white text-sm lg:text-lg font-semibold hover:no-underline hover:text-gl-green transition-all">
              About Us
            </a>
          </Link>
          <Link href="/contact" as="/contact">
            <a className="text-white text-sm lg:text-lg font-semibold hover:no-underline hover:text-gl-green transition-all">
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      <div className=" inner-container grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex gap-4 justify-center lg:justify-start">
          <a href="https://pin.it/3wgLIvP">
            <FaPinterestP className="text-lg lg:text-2xl text-gl-green" />
          </a>
          <a href="https://pin.it/3wgLIvPhttps://www.facebook.com/9jahealthytips/">
            <AiFillFacebook className="text-lg lg:text-2xl text-gl-green" />
          </a>
          <a href="http://www.instagram.com/9jahealthytips">
            <FiInstagram className="text-lg lg:text-2xl text-gl-green" />
          </a>
          <a href="http://twitter.com/9jahealthytips/">
            <AiOutlineTwitter className="text-lg lg:text-2xl text-gl-green" />
          </a>
        </div>

        <div className="mt-2 lg:mt-0">
          <p className="text-white text-justify text-sm font-WorkSans">
            Gleanwellness provides wellness management in an informational and
            educational manner only. Our content and services are intended to
            assist you and other readers in your lifestyle choices and personal
            wellness efforts. The content is not intended to be a substitute for
            professional medical advice, diagnosis, or treatment Glean wellness
            does not provide medical advice, diagnosis, or treatment. Always
            consult your physician with questions regarding a medical condition,
            procedure, or treatment. And as well regarding the applicability of
            any information provided on our website
          </p>
          <p className="text-white text-right text-sm mt-2">
            {" "}
            &copy; 2021 Glean Wellness
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
