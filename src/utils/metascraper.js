import axios from 'axios';
const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')()
])

/** 
 * Retrieve image and description metaData from provided URL
 * @param {string} storyUrl
 * @returns {promise}
 */
export const metascrape = async (storyUrl) => {
  try {
    // ProxyUrl to get arounc CORS without a backend
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = proxyUrl + storyUrl
    
    // axios call to retrieve page data
    const response = await axios.get(url);
    const html = response.data;

    // parse metaData from our url
    const metadata = await metascraper({ html, url});

    // Only return when both values are available, otherwise we can't make a story
    if(metadata.description && metadata.image) {
      return metadata;
    }
  } catch(err) {
    // Catch 403s and 500s to links
    return;
  }
}