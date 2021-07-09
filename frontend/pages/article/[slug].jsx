import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/GlobalLayout/layout"
import Seo from "../../components/seo"
import { GoPrimitiveDot } from "react-icons/go"
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineTwitter
} from "react-icons/ai"
import { DiscussionEmbed } from "disqus-react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Article = ({ article, categories }) => {
  const [location, setLocation] = useState("")
  useEffect(() => {
    setLocation(window.location.href)
  }, [])

  const disqusConfig = {
    url: location,
    identifier: article.id,
    title: article.title
  }

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="w-full mt-5 lg:mt-10">
        <div className="inner-container flex gap-9">
          <div className="w-full">
            <h1 className="lg:w-8/12 leading-relaxed text-3xl font-semibold">
              {article.title}
            </h1>

            <div className="my-3 flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-gl-green uppercase font-semibold">
                  {article.category.name}
                </h1>

                <p className="text-gray-400 flex items-center ml-3">
                  <GoPrimitiveDot className="mr-1 h-3" />
                  <Moment format="MMM Do YYYY" className="ml-0">
                    {article.published_at}
                  </Moment>
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <p>SHARE</p>
                <a href={`https://twitter.com/share?text=${location}`}>
                  <AiOutlineTwitter className="text-2xl text-gl-green" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer.php?u=${location}&quote=${article.title}`}
                >
                  <AiFillFacebook className="text-2xl text-gl-green" />
                </a>
                <a href={`https://wa.me/?text=${location}`}>
                  <AiOutlineWhatsApp className="text-2xl text-gl-green" />
                </a>
              </div>
            </div>

            <div className="w-full">
              <img
                src={article.image}
                className="w-full h-auto object-cover my-3"
                style={{ maxHeight: 600 }}
              />

              <div className="w-80 h-20vh rounded-lg border-4 mx-auto border-dashed  border-gray-300 px-5 items-center justify-center flex lg:hidden">
                <p className="text-center">
                  Contact for advert bookings and placement
                </p>
              </div>

              <ReactMarkdown
                source={article.content}
                escapeHtml={false}
                className="text-lg text-justify mb-10"
              />

              <DiscussionEmbed config={disqusConfig} shortname="glean-2" />
            </div>
          </div>
          <div className="w-80 h-40vh rounded-lg border-4 border-dashed  border-gray-300 px-5 items-center justify-center hidden lg:flex">
            <p className="text-center">
              Contact for advert bookings and placement
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map(article => ({
      params: {
        slug: article.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  return {
    props: { article: articles[0], categories },
    revalidate: 1
  }
}

export default Article
