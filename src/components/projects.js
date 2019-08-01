import React from 'react';
import Project from './Project';
import projectStyle from "../styles/projects.module.scss";

const projects = [
  {
    title: 'Shark Club',
    link: 'https://www.sharkclub.com',
    desc: '',
    image: 'sharkclub.png'
  },
  {
    title: 'Pearl Of Burgundy',
    link: 'https://www.pearlofburgundy.com/',
    desc: '',
    image: 'pob.png'
  },
  {
    title: 'Inclusion BC',
    link: 'https://inclusionbc.org/',
    desc: '',

    image: 'inclusion.png'
  },
  {
    title: 'Storkcraft',
    link: 'https://storkcraftdirect.com/',
    desc: '',
    image: 'storkcraft.png'
  },
];

const Projects = props => {
  return (
    <section className={projectStyle.projects} id="projects" title="Projects">
        {projects.map((project, i) => {
          return <Project key={i} project={project} />;
        })}
    </section>
  );
};
export default Projects;
