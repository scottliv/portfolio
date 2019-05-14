import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const SocialLinks = () => (
  <div>
    <a href="https://www.linkedin.com/in/scott-livingstone/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
    <a href="https://github.com/scottliv"><FontAwesomeIcon icon={faGithub}/></a>
  </div>
)

export default SocialLinks