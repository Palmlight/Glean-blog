import React from "react"
import { fetchAPI } from "../../lib/api"
import Articles from "../../components/articles"
import Layout from "../../components/GlobalLayout/layout"
import Seo from "../../components/seo"
import Hero from "../../components/Heros/Hero"

const Index = ({ categories, homepage, about }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <Hero name="About Us" />
      <div className="inner-container my-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:items-center gap-5">
          <div className="text-justify">
            <h1 className="font-semibold text-2xl">We’re on a mission to...</h1>
            <p className="mt-2">{about.mission}</p>
          </div>

          <img src={about.missionUrl} className="lg:mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:items-center gap-5">
          <img src={about.visionUrl} className="lg:mx-auto" />
          <div className="text-justify">
            <h1 className="font-semibold text-2xl">Hi I'm Onyinye</h1>
            <p className="mt-2">{about.vision}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories, homepage, about] = await Promise.all([
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/about-page")
  ])

  return {
    props: { categories, homepage, about },
    revalidate: 1
  }
}

export default Index
