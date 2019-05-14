import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Shark Club',
    link: 'https://www.sharkclub.com',
    desc:
      'A web app that lets users search for all kinds of recipes from around the world. Fetches data using the Edaman API. Built with React, Redux, and Bootstrap',
    image: 'sharkclub.png'
  },
  {
    title: 'Pearl Of Burgundy',
    link: 'https://www.pearlofburgundy.com/',
    desc:
      'A brochure site aimed to promote tourism in Dumaguete City Philippines. Built with React, Sass and Bootstrap.',
    image: 'pob.png'
  },
  {
    title: 'Inclusion BC',
    link: 'https://inclusionbc.org/',
    desc:
      'An e-commerce app that lets users filter through items in real-time using multiple filters (e.g. type, color, size, price). Built with React, Redux, and Sass',

    image: 'inclusion.png'
  },
  {
    title: 'Sue Hollis',
    link: 'https://www.suehollis.com/',
    desc:
      'A web app that lets customers customize their burgers by adding the ingredients they want. Built with React',
    image: 'suehollis.png'
  },
];

const Projects = props => {
  return (
    <section className="projects">
        {projects.map((project, i) => {
          return <Project key={i} project={project} />;
        })}
    </section>
  );
};
export default Projects;
