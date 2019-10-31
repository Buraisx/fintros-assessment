import  { useState, useEffect} from 'react';

const ScrollListener = (onScrollFunc) => {
  // state to determine if onScrollFunc should be triggered
  const [loadMore, setLoadMore] = useState(false);

  const handleScroll = () => {
    const storyLoaderDiv = document.querySelector(".story-list__loader");
    const bounding = storyLoaderDiv.getBoundingClientRect();
    if (bounding.bottom <= window.innerHeight) {
      setLoadMore(true);
    }
  }

  useEffect(() => {
    // Add a scroll Event listener at componentDidMount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * useEffect for setLoadMore state
   * Everytime loadMore is changed, increase our storyData
   */
  useEffect(() => {
    if (!loadMore) return;
    console.log("hi");
    // onScrollFunc();
    setLoadMore(false);
  }, [loadMore]);
};

export default ScrollListener;