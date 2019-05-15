import PropTypes from "prop-types"
import React from "react"
import SocialLinks from "./socialLinks"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import bannerStyle from "../styles/banner.module.scss"

const Banner = ({ bannerTitle, tagLine }) => (


  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "banner-background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
               render={data => {
                 // Set ImageData.
                 const imageData = data.desktop.childImageSharp.fluid
                 return (
                   <BackgroundImage Tag="section"
                                    className={bannerStyle.banner}
                                    fluid={imageData}
                                    backgroundColor={`#040e18`}
                   >
                     <div>
                       <h1 className={bannerStyle.title}>
                         {bannerTitle}
                       </h1>
                       <p>
                         {tagLine}
                       </p>
                     </div>
                   </BackgroundImage>
                 )
               }
               }

  />

)

Banner.propTypes = {
  bannerTitle: PropTypes.string,
  tagLine: PropTypes.string,
}

Banner.defaultProps = {
  bannerTitle: ``,
  tagLine: ``,
}

export default Banner