import React from 'react';
import PropTypes from 'prop-types';
import './Story.scss';

const propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
};

const Story = ({ title, description, imageSrc}) => {
  return (
    <li className="story">
      <img 
        className="story__image"
        src={imageSrc} 
        alt="story"
      />
      <div className="story__excerpt">
        <h2>{ title }</h2>
        <p className="story__excerpt-description">{ description }</p>
      </div>
    </li>
  );
}

Story.propTypes = propTypes;

export default Story;
