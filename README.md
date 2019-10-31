William Situ
Thursday, Oct 31, 2019
Fintros Assessment

Bootstrapped with Create React App
## Starting the application
- `npm i`
- `npm start`

## Possible breaking issues
1. This application relies on `https://cors-anywhere.herokuapp.com` an external resource
If that service goes down, I won't be able to fetch metadata anymore.
Normally, one would build a back-end to be able to get past that issue, but I only focused on React front-end application.
2. Many links don't always accept outside access, and will return `404`s `500`s etc
Extra work is needed to find solutions that bypass these issues
3. Possible scroll issues?

## ToDo
1. Refactoring of StoryList, Header, and Footer.
Footer is repetitive, and some code can be moved out into seperate files,
especially storyList.

2. Refactor css files
Style sheets aren't encapsulated, but I have seperated them out regardless.
3. Accessibility
4. Testing
5. font is wonky/not accurate due to probably not having the right font assets

## Design Philosphy
Any time I want to rerender, I should be using state.  Because I am filtering data, I should either have:
1. a filter function in my UI 
OR
2. another StateObject for stories to be displayed
I chose option 1. this time around for better spaceComplexity, though it propably doesn't make a difference


Thank you!