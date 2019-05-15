import PropTypes from "prop-types"
import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import headerStyle from "../styles/header.module.scss"
import SocialLinks from "./socialLinks"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY })
    const el = document.querySelector("header")
    if (this.state.scroll > 0) {

      el.style.backgroundColor = "#232323"
    } else {
      el.style.backgroundColor = "transparent"
    }

  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }


  render() {
    const { siteTitle } = this.props
    return (
      <header className={headerStyle.header}>
        <div className={headerStyle.container}>
          <div className={headerStyle.flexContainer}>
            <h1 className={headerStyle.title}>
              {siteTitle}
            </h1>
            <SocialLinks/>
          </div>
          <nav>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-95}
              duration={500}
              className={headerStyle.link}
            >About</Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-95}
              duration={500}
              className={headerStyle.link}
            >Projects</Link>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
