## Design Philosphy
Any time I want to rerender, I should be using state.  Because I am filtering data, I should either have a filter function in my UI or have a state Object that changes based on another value.

1. dealing with cors
2. meta data scrapper

- CORS proxy might go down
- sometimes a site wont have metadata
- sometimes the sitelink returns a 404
metascraper.js line 13
- preference of axios call over fetch due to ease of use
- debatable design choices for filtering
- Do I generate a new state that holds all of our content to be rendered?
- Or do I filter on the spot based on a small state object of even or odd?

- font is wonky due to probably not having the right font assets
todo
responsiveness in 620px below viewport
- nav hamburger menu
- nav big overlay

seperating out more functionality to other components

footer
