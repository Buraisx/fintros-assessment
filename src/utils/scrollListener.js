import  { useState, useEffect} from 'react';

const ScrollListener = (onScrollFunc) => {
  // state to determine if onScrollFunc should be triggered
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    const storyLoaderDiv = document.querySelector(".story-list__loader");
    const bounding = storyLoaderDiv.getBoundingClientRect()

    if (bounding.top <= window.innerHeight) {
      setIsFetching(true);
    }
  }
  
  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    }
  }

  useEffect(() => {
    // Add a scroll Event listener at componentDidMount
    window.addEventListener('scroll', debounce(handleScroll, 350));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 350));
  }, []);

  /**
   * useEffect for setIsFetching state
   * Everytime isFetching is changed, increase our storyData
   */
  useEffect(() => {
    if (!isFetching) return;
    onScrollFunc();  
    setIsFetching(false);
  }, [isFetching]);
};

export default ScrollListener;