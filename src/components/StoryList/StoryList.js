import React, { useState, useEffect } from 'react';
import { metascrape } from '../../utils/metascraper';
import ScrollListener from '../../utils/scrollListener';

import { BallBeat } from 'react-pure-loaders';

import './StoryList.scss';
import Story from '../Story/Story';

const StoryList = () => {
  // Amount of stories that can be displayed at once. Initial 30
  const [storyLimit, setStoryLimit] = useState(30);
  // List of storyIds available for rendering
  const [storyIds, setStoryIds] = useState([]);
  // MetaData for stories
  const [storyData, setStoryData] = useState([]);
  // Filter options
  const [filterOption, setFilterOption] = useState("even");

  const [isLoading, setIsLoading] = useState(true);

  const filterOptions = [
    {
      text: "Even Numbered Stories",
      value: "even",
    },
    {
      text: "Odd Numbered Stories",
      value: "odd",
    }
  ];

  // displayStories
  const fetchStoryData = async (storyId) => {
    setIsLoading(true);
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
    const data = await response.json();

    if(!data) return;
    if (!data.url) return;

    const metaData = await metascrape(data.url);
    if (metaData) {
      const newStoryData = { ...data, ...metaData }
      setStoryData(oldStoryData => [...oldStoryData, newStoryData]);
    }
    setIsLoading(false);
  }

  /**
   * Increases amount of stories to be displayed
   * and generates the story data
   */
  const increaseStoryData = () => {
    for(let i = storyLimit; i < storyLimit + 30; i++){
      fetchStoryData(storyIds[i]);
    }
    setStoryLimit(storyLimit + 30);
  }

  // customHook that triggers argument function on scroll
  ScrollListener(increaseStoryData);

  const changeFilterType = (e, filterType) => {
    e.preventDefault();
    if(filterOption !== filterType) {
      // If filterOption is different from the passed in filterType
      // change the option to the filterType i.e even !=== odd => change
      setFilterOption(filterType);
    }
  }

  const filterData = (condition, index) => {
    switch (condition) {
      case "even":
        return index%2; 
      case "odd":
        return !(index%2);
      default:
        return index % 2;
    }
  }
  // Initial componentDidMount fetch call for all storyIds
  useEffect(() => {
    // get all storyIds from top stories
    const fetchStoryIds = async () => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
      const data = await response.json();
      // Set storyId state array
      setStoryIds(data);
      for (let i = 0; i < 30; i++) {
        fetchStoryData(data[i]);
      }
    }
    fetchStoryIds();
  }, []);

  return (
    <section className="story-list__container">
      {/* controls can be its own component in the future.  Can be reused for other pages */}
      <nav className="story-list__controls">
        <ul>
          {
            filterOptions.map((item, index) => 
              <li key={index}>
                <a
                  className={filterOption === item.value ? "active" : ''}
                  href="/"
                  onClick={(e) => {changeFilterType(e, item.value)}}>
                  { item.text }
                </a>
              </li>
            )
          }
        </ul>
      </nav>
      
      <ul className="story-list">
        {
          storyData.filter((story, index) => {
            return filterData(filterOption, index);
          }).map( (story, index) => (
            <Story
              key={story.id}
              isLargeFormat={index === 0}
              title={story.title}
              description={story.description}
              imageSrc={story.image}
              url={story.url}
            />
          ))
        }
      </ul>
      <div className="story-list__loader">
        {
          isLoading ? <BallBeat
            color={'#000000'}
            loading={true}
          />
          : <a className="button" href="/">
              Scroll for more posts	&darr;
            </a>
        }
      </div>
    </section>
  );
}

export default StoryList;
