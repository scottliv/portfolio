import React from 'react';
import contentStyle from '../styles/content.module.scss';

const Content = () => (
  <div className={contentStyle.content} id="about" title="About">
      <h2>About</h2>

      <p>
        I'm a web developer who loves building and fixing things.
        I enjoy making useful things for people and I love finding solutions to problems with code.
        I am comfortable working on both the front and backend of web applications and sites, I like trying and learning new technologies and am continuously
        growing my skill set. Currently I am working for a web development agency, <a href="https://forgeandsmith.com/">Forge and Smith</a>, below you can
        see a few projects I've done with them.
      </p>
  </div>
);

export default Content;