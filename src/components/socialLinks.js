import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import socialStyle from "../styles/social.module.scss";

const SocialLinks = () => (
  <div className={socialStyle.container}>
    <a href="https://www.linkedin.com/in/scott-livingstone/" className={socialStyle.socialItem} target="_blank"><FontAwesomeIcon size="2x" icon={faLinkedin}/></a>
    <a href="https://github.com/scottliv" className={socialStyle.socialItem}><FontAwesomeIcon size="2x" icon={faGithub}/></a>
    <a href="mailto:scottdlivingstone@gmail.com" className={socialStyle.socialItem}><FontAwesomeIcon size="2x" icon={faEnvelope}/></a>
  </div>
)

export default SocialLinks