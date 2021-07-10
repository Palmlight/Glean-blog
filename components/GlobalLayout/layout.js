import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <div className="grid min-h-screen min-w-full layout">
    <Nav categories={categories} />

    <div className="" style={{ marginTop: "88px" }}>
      {children}
    </div>

    <Footer />
  </div>
)

export default Layout
