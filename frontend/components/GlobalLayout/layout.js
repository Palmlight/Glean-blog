import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <div className="grid min-h-screen min-w-full layout">
    <Nav categories={categories} />

    <div className="mt-20">{children}</div>

    <Footer />
  </div>
)

export default Layout
