React Tech Test

This app uses Punk API and shows a list of punk beers.

I have developed this project as assignment on ReactJS.

I have created this app using create-react-app for the project base and react-router-dom for routing.

The app is responsive. 

Home page shows a list of all the beers returned by the api. Pending ajax requests have a loading state shown on the current page. 

Clicking on a More details link navigates to a separate page showing more details about the selected beer. The url pathname changes to /beers/:id. Image and beer name should also link to the beer page.

The beer page have a link in toolbar to go back to the home page.

Deep-linking to a specific beer page loads that beer data from the api without going through the home page.

Wrong url navigates to an error page.

The styles are added using wireframes provided.

Steps to get started: => Clone Repository: git clone => cd react-tech-test => npm install => npm start => visit http://localhost:3000/

I was not able to add sorting feature and unit tests due to time constraint.