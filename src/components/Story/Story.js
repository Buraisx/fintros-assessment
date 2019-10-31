import React from 'react';
import PropTypes from 'prop-types';
import './Story.scss';

const propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
};

const Story = ({ title, description, imageSrc, url}) => {
  return (
    <li className="story">
      <a href={url} className="story__wrapper">
        <img 
          className="story__image"
          src={imageSrc} 
          alt="story"
        />
        <div className="story__excerpt">
          <span>MONEY DIARIES</span>
          <h2 className="story__excerpt-title">{ title }</h2>
          <p className="story__excerpt-description">{ description }</p>
        </div>
      </a>
    </li>
  );
}

Story.propTypes = propTypes;

export default Story;
