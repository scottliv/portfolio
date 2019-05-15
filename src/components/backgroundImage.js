import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"

function renderImage(file, children, className) {
  return file && <BackgroundImage fluid={file.node.childImageSharp.fluid} className={className}>{children}</BackgroundImage>;
}

const MyBackgroundImage = (props) => {
  return <StaticQuery
    query={graphql`
      query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
    `}
    render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.src), props.children, props.className)}
  />
}
export default MyBackgroundImage;