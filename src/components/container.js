import React from "react"
import PropTypes from "prop-types"

import containerStyle from "../styles/container.module.scss"

const Container = ({ children }) => (

      <>
        <section className={containerStyle.container}>{children}</section>
      </>

)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
