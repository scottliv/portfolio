import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "../styles/header.module.scss"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
    const el = document.querySelector("header");
    if (this.state.scroll > 0) {

      el.style.backgroundColor = "black";
    }
    else {
      el.style.backgroundColor = "transparent";
    }

  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }


  render() {
    const {siteTitle} = this.props;
    return (
      <header className={headerStyle.header}>
        <div className={headerStyle.container}>
          <h1 className={headerStyle.title}>
            <a href="mailto:scottlivingstone@gmail.com">
              {siteTitle}
            </a>
          </h1>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
