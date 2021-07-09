import React from "react"
import { fetchAPI } from "../../lib/api"
import Articles from "../../components/articles"
import Layout from "../../components/GlobalLayout/layout"
import Seo from "../../components/seo"
import Hero from "../../components/Heros/Hero"
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube
} from "react-icons/ai"
import { FaFacebookSquare } from "react-icons/fa"
import { useForm, ValidationError } from "@formspree/react"

const Index = ({ categories, homepage }) => {
  const [state, handleSubmit] = useForm("myyldgqa")

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <Hero name="Contact Us" />
      <div className="inner-container my-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h1 className="font-bold text-3xl ">Follow us on social media</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 break-words">
            <div className="border-2 border-dashed border-gray-400 rounded-sm px-5 py-3">
              <div className="flex items-center">
                <AiOutlineTwitter className="text-xl text-gl-green" />
                <p className="text-lg ml-2 font-semibold">Twitter</p>
              </div>

              <h1 className="font-bold text-xl">@gleanwellness</h1>
            </div>
            <div className="border-2 border-dashed border-gray-400 rounded-sm px-5 py-3">
              <div className="flex items-center">
                <FaFacebookSquare className="text-xl text-gl-green" />
                <p className="text-lg ml-2 font-semibold">Facebook</p>
              </div>

              <h1 className="font-bold text-xl">@gleanwellness</h1>
            </div>{" "}
            <div className="border-2 border-dashed border-gray-400 rounded-sm px-5 py-3">
              <div className="flex items-center">
                <AiOutlineInstagram className="text-xl text-gl-green" />
                <p className="text-lg ml-2 font-semibold">Instagram</p>
              </div>

              <h1 className="font-bold text-xl">@gleanwellness</h1>
            </div>{" "}
            <div className="border-2 border-dashed border-gray-400 rounded-sm px-5 py-3">
              <div className="flex items-center">
                <AiFillYoutube className="text-xl text-gl-green" />
                <p className="text-lg ml-2 font-semibold">Facebook</p>
              </div>

              <h1 className="font-bold text-xl">@gleanwellness</h1>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <h1 className="font-bold text-3xl ">Leave us a message</h1>
            {state.succeeded ? (
              <p className="text-center text-2xl font-medium">
                Thanks for contacting us!
              </p>
            ) : (
              <form className="w-full mx-auto" onSubmit={handleSubmit}>
                <div className="flex gap-5">
                  <input
                    className="bg-gray-100 rounded-md w-full py-2 px-5 "
                    placeholder="Name"
                    id="name"
                    name="name"
                  />
                  <input
                    className="bg-gray-100 rounded-md w-full py-2 px-5 "
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>

                <textarea
                  className="bg-gray-100 rounded-md w-full py-4 px-5 resize-none mt-5 h-40 "
                  placeholder="Write something to us..."
                  name="msg"
                  id="msg"
                />

                <div className="flex w-full">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-5 ml-auto text-center bg-gl-green text-white font-semibold px-4 py-2 rounded-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories, homepage] = await Promise.all([
    fetchAPI("/categories"),
    fetchAPI("/homepage")
  ])

  return {
    props: { categories, homepage },
    revalidate: 1
  }
}

export default Index
