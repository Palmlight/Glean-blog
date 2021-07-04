import React from "react"
import { Carousel } from "react-responsive-carousel"
import Articles from "../components/articles"
import CarouselCard from "../components/CarouselCard/CarouselCard"
import Layout from "../components/GlobalLayout/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

const Home = ({ articles, categories, homepage }) => {
  const carouselArticles = articles.slice().reverse().slice(0, 5)
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="global-layout">
        <div
          className="w-full h-auto mx-auto overflow-hidden"
          style={{ maxWidth: "100vw" }}
        >
          <Carousel
            autoPlay="true"
            infiniteLoop={true}
            showArrows={false}
            dynamicHeight={true}
            showStatus={false}
            showThumbs={false}
            className="w-full"
            transitionTime={500}
          >
            {carouselArticles.map((a, i) => (
              <CarouselCard article={a} key={i} />
            ))}
          </Carousel>

          <div className="inner-container">
            <div className="my-10 flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Latest topics</h1>

              <Link as={`/articles`} href="/articles">
                <a className="font-semibold text-base text-gl-green hover:no-underline hover:text-gl-green transition-all flex items-center">
                  Read More
                  <FiArrowRight className="ml-3" />
                </a>
              </Link>
            </div>
            <Articles articles={articles} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage")
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1
  }
}

export default Home
