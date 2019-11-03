import React from 'react';
import PropTypes from 'prop-types';
import './Story.scss';

const propTypes = {
  isLargeFormat: PropTypes.bool,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
};

const Story = ({ isLargeFormat, title, description, imageSrc, url }) => {
  console.log(isLargeFormat);
  return (
    <li className={ isLargeFormat ? "story--featured" : "story" }>
      <a href={url} className="story__wrapper">
        <img 
          className="story__image"
          src={imageSrc} 
          alt="story"
        />
        <div className={isLargeFormat ? "story__excerpt story__excerpt--featured" : "story__excerpt"}>
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
