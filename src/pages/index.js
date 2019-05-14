import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Container from "../components/container";
import Content from "../components/content";
import Projects from "../components/projects";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner bannerTitle={"Web Developer"} tagLine={"Based in Vancouver, BC"} />
    <Container>
      <Content />
      <Projects />
      <Image />
    </Container>
  </Layout>
)

export default IndexPage
