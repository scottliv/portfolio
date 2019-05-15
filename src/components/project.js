import React from "react"
import BackgroundImage from "./backgroundImage"
import projectStyle from "../styles/projects.module.scss"

const Project = ({ project }) => (
  <article className={projectStyle.project}>
    <a href={project.link} target="_blank">
      <BackgroundImage src={project.image} className={projectStyle.backgroundImage}>
      </BackgroundImage>
      <div className="metaContainer">
        <p>Visit {project.title}</p>
      </div>
    </a>
  </article>
)

export default Project
