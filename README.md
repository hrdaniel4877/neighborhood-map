# Neighborhood Map (React)


## Description
This is a project developed for the Udacity & Google Front End Web Developer Scholarship.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    components/
        CityList.js
        CityMap.js
        PlaceFilter.js
```
For the project to build, **these files must exist with exact filenames**:
* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


## Making a Progressive Web App

By default, the production build is a fully functional, offline-first
[Progressive Web App](https://developers.google.com/web/progressive-web-apps/).


## Installation
* install all project dependencies with `npm install`
* start the development server with `npm start`


## Usage
When starting, the app will load automatically 30 places of interest in Cluj-Napoca, Romania, using Forsquare API.
These POI will be displayed on left side, in a list and on the map, with Markers. 
The map is using Google Maps API.
When clicking on a marker, an info window is displayed with some info about the location.
When clicking in the list on a name, the list and the markers on the map are filtered to show just that locations.
When typing inside the input on the top of the list, the list and the coresponding markers on the map will be filtered accordingly.
Clicking on the x on top right corner of the info window will close it.
Clicking on the input, will clean-up any search terms introduced.


## Dependencies
The following npm packages:
* react
* escape-regexp
* google-maps-react
