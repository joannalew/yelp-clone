# Berp

[Berp Live](https://burp2.herokuapp.com/)

![berp-home](https://user-images.githubusercontent.com/22438779/50365234-6bfbb700-0528-11e9-9c77-556f5139256f.png)

Berp is a Yelp clone that allows users to browse restaurants in their area. Users can read and write reviews for these restaurants in order to let other users know about their restaurant experience.

### Technologies
* Ruby on Rails
* PostgreSQL
* React.js and Redux
* HTML and CSS

### Features
* Maintain user authentication security from frontend to backend using BCrypt.
* Allows users to search for businesses by name and location.
* Shows businesses on a google map using GoogleMap API.
* Displays a business's information in an organized, easy-to-read layout.
* Allows users to write, read, edit, and delete reviews for businesses.

#### Search
Users can search for businesses by typing the business name or location in the search bar. If a user doesn't enter a location, the default location is set as San Francisco. After users click the search button, the site will return a list of related businesses.

![berp-search](https://user-images.githubusercontent.com/22438779/50366177-0eb63480-052d-11e9-966d-16b24e6b772c.png)

#### Image Carousel
Users can see images of a business by going to the business's page. The user can view three images at a time. The user can click the arrows on the ends of the carousel to flip through the business's images, or hover over an image to enlarge it.

![berp-carousel](https://user-images.githubusercontent.com/22438779/50366404-483b6f80-052e-11e9-83f5-0042706dcec0.png)

#### Dynamic Rating
Logged in users can write and update their review for a business. In the review form, the background color of the rating stars dynamically change depending on where the user's cursor is.

![berp-rating](https://user-images.githubusercontent.com/22438779/50366504-e62f3a00-052e-11e9-914a-f17c37be4956.png)
