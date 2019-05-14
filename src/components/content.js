import React from 'react';
import contentStyle from '../styles/content.module.scss';

const Content = () => (
  <div className={contentStyle.content}>
      <h2>About</h2>

      <p>
        I'm a web developer who loves building and fixing things.
        I enjoy making useful things for people to enjoy and I love finding solutions to problems with code.
      </p>
  </div>
);

export default Content;