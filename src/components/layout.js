/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./normailize.css"
import "../styles/typography.scss"
import Container from "./container"
import layoutStyle from "../styles/layout.module.scss"
import footerStyle from "../styles/footer.module.scss"

const handleScroll = () => {
  console.log("hi")
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          handleScroll={handleScroll}
        />
        <div className={layoutStyle.layout}>
          <main>{children}</main>
          <footer className={footerStyle.footer}>
            <Container>© {new Date().getFullYear()}</Container>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
