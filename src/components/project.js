import React from "react"
import Image from "./image"

const Project = ({ project }) => (
  <article style={{ position: `relative` }}>
    <a href={project.link} target="_blank">
      <Image src={project.image}/>
    </a>
  </article>
)

export default Project