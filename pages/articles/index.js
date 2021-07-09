import React from "react"
import { fetchAPI } from "../../lib/api"
import Articles from "../../components/articles"
import Layout from "../../components/GlobalLayout/layout"
import Seo from "../../components/seo"
import Hero from "../../components/Heros/Hero"

const Index = ({ articles, categories, homepage }) => {
  const fullArticles = articles.slice().reverse()
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <Hero name="Articles" />
      <div className="global-layout">
        <Articles articles={fullArticles} />
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
export default Index
