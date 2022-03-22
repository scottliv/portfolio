import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Container from "../components/container"
import Content from "../components/content"
import Projects from "../components/projects"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner bannerTitle={"Web Developer"} tagLine={"Based in Vancouver, BC"} />
    <Container>
      <Content />
      <Projects />
      <Image />
      <div class="eLIB--row__singleOption">
        <link rel="stylesheet" href="https://linkin.bio/css/gallery.min.css" />
        <iframe
          src="https://staging.linkin.bio/scottlivingstone34"
          width="100%"
          height="640px"
          frameborder="0"
        ></iframe>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
