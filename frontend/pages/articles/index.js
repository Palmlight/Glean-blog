import React from "react"
import { fetchAPI } from "../../lib/api"
import Articles from "../../components/articles"
import Layout from "../../components/GlobalLayout/layout"
import Seo from "../../components/seo"

const Index = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="global-layout">
        <Articles articles={articles} />
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
