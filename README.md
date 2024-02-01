# Luxury Real Estate Agency

This project is a website for a luxury real estate agency.

React is used for the front-end and Firebase services are used for the back-end. This is where (dummy) data are stored.

The [Firebase Realtime Database](https://firebase.google.com/docs/database?hl=fr) is used to stored real estate details (type of transaction, title, price, location ect...).
[Cloud Storage for Firebase](https://firebase.google.com/docs/storage?hl=fr) is used to stored images of these real estate.

If you want to run this project properly on your own, you'll need to create your own Firebase project and use Realtime Database and Storage services.

Raw data are located into the [data](/src/data) folder. They need to be formatted for Firebase Realtime Database. To do that, you can execute the script [real-estate-script.js](/src/scripts/real-estate-script.js). Output file with formatted data is [generated-real-estate.json](/src/scripts/generated-real-estate.json).

Here's the link to the deployed site:
[https://portfolio-real-estate-8e286.web.app/](https://portfolio-real-estate-8e286.web.app/).
