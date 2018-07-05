# Roster Bots
Generate up to 6 different rosters in your league. Choose your roster names, see starter and sub players coordinated by color, and see each player's names and stats of their attributes.

This project was initially created with create-react-app with additional dependencies like Redux, Jest configurations, Styled-Components, and Faker.js

## Clone and Install
1. Install Node.js and Git to your computer
2. Clone this project by running ```git clone https://github.com/tedthedev/roster-bots.git```
3. Next, navigate into the project folder with ```cd roster-bots```
4. Run ```npm install```
- this will install all the dependencies

## Run project locally
- ```npm run start``` will start a dev environment and open up a browser to the host ```localhost:3000```

## How to run tests
- ```npm run test``` will start Jest in the watch mode where you can run tests

## How to build
- ```npm run build``` will run a build and put the bundle in the ```build``` folder

## Decisions
### Redux
Redux is great for managing state. I wanted to structure state in two reducers. One is Rosters and the other is Players. I felt having two different reducers rather than grouping them all together would be easy to keep track of players. My thought was you can link players to each roster through the unique id. It would be easy to remove/update a roster since one player could be changed to another roster. The second reason I did it this way was to easily loop through all the players to check for uniqueness. If that wasn't a requirement, then I would probably put all of the player data into the roster reducer. One con of this implementation would be that the roster state relies on the player state and vice versa. So I am using redux-thunk to get overall state and be able to link both states together. That means I am also dependent on redux-thunk to access all the state. I also chose redux thunk to be able to dispatch actions based on certain conditions, be able to serve a 'loading roster' image when you are generating a team, and be able to create 'async' actions. Perhaps later down the road, we do need to hook up to an API or database where all of that is there.
### Styled-Components
I really like using styled-components to keep css close to the componen. CSS Modules with SCSS, etc is another option, but I feel styled-components is very easy to set up and get started where you can keep the css in your component code and can change styled based on props.
### Faker
Used faker to generate random data from names, id's, and numbers. I created a utility 'library' to help generate random data, but also be able to adhere to the requirements with having unique names and attributes. I implemented some checking there in the generateUnique() method in the FakeRoster factory.
### Project structure
I chose to model after the [Fractal pattern](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af). I believe this folder structure keeps your directory easier to navigate, keep things together in a logical format, and easier to scale. Another is I didn't use the container and presentational pattern for making components since it is a smaller app, but that could be easily changed to. If there was more logic, such as fetching data from an api or database, etc. then making container and presentationl React components would be the way I would have implmented them.
