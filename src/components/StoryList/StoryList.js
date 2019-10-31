import React, { useState, useEffect } from 'react';
import { metascrape } from '../../utils/metascraper';
import ScrollListener from '../../utils/scrollListener';

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
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
    const data = await response.json();

    if(!data) return;
    if (!data.url) return;

    const metaData = await metascrape(data.url);
    if (metaData) {
      const newStoryData = { ...data, ...metaData }
      setStoryData(oldStoryData => [...oldStoryData, newStoryData]);
    }
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

  // Initial componentDidMount fetch call for all storyIds
  useEffect(() => {
    // get all storyIds from top stories
    const fetchStoryIds = async () => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
      const data = await response.json();
      // Set storyId state array
      setStoryIds(data);
      for(let i = 0; i < 10; i++){
        fetchStoryData(data[i]);
      }
    }
    fetchStoryIds();    
  }, []);

  const changeFilterType = (e, filterType) => {
    e.preventDefault();
    if(filterOption !== filterType) {
      // If filterOption is different from the passed in filterType
      // change the option to the filterType i.e even !=== odd => change
      setFilterOption(filterType);
    }
  }

  return (
    <section className="story-list__container">
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
      {
        storyData[0] ?
        <main className="story-list__featured">
          <img 
            src={storyData[0].image}
            className="story-list__featured-image"
            alt="hi"
          />
          <div className="story-list__featured-excerpt">
            <h2>{storyData[0].title}</h2>
            <p>{storyData[0].description}</p>
          </div>
        </main>
        : null
      }
      
      <ul className="story-list">
        {
          storyData.slice(1).filter((story,index) => {
            if(filterOption === "even") {
              return index%2;
            } else {
              return !(index%2);
            }
          }).map( story => (
            <Story
              key={story.id}
              title={story.title}
              description={story.description}
              imageSrc={story.image}
            />
          ))
          // storyData.slice(1).map( story => (
          //   <Story
          //     key={story.id}
          //     title={story.title}
          //     description={story.description}
          //     imageSrc={story.image}
          //   />
          // ))
        }
        <li>
          
        </li>
      </ul>
      <div className="story-list__loader">
        <a className="button" href="/" onClick={increaseStoryData}>
            More posts
          </a>
      </div>
    </section>
  );
}

export default StoryList;
