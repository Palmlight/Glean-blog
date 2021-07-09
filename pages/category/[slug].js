import Articles from "../../components/articles"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/GlobalLayout/layout"
import Seo from "../../components/seo"
import Hero from "../../components/Heros/Hero"

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="w-full">
        <Hero name={category.name} />
        <Articles articles={category.articles} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories")

  return {
    paths: categories.map(category => ({
      params: {
        slug: category.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
  const categories = await fetchAPI("/categories")

  return {
    props: { category, categories },
    revalidate: 1
  }
}

export default Category
