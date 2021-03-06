# Pinterest Clone

The purpose of the project is to build functionality similar to  https://build-a-pinterest-clone.freecodecamp.rocks/.

## UX

As an unauthenticated user, I can login with GitHub.

As an authenticated user, I can link to images.

As an authenticated user, I can delete images that I have been linked to.

As an authenticated user, I can see a Pinterest-style wall of all the images that I have been linked to.

As an unauthenticated user, I can browse other users' walls of images.

As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image (can use jQuery broken image detection).

Masonry.js is a library that allows for Pinterest-style grids.

**Information Architecture**

User consists of username, githubId, password, link and imagelinks.  All are string except imagelinks, which is in the Schema.Types.ObjectId.

In addition, username and link are required and unique and imagelinks is an array.

Pin consists of owner, ownerid, ownerlink, link and title.  All are string, except ownerid, which is in the Schema.Types.ObjectId.  All are required.  In addition, link is unique.

## Features

- Link to Images
- Delete Images that have been linked to
- Browse other users' walls of images
- Add Pins

## Technologies

This project uses the technologies of Pug, CSS3, Bootstrap 5.1.3, Font Awesome 5.15.4, Express, Body Parser, Cookie Parser, Random Bytes, [Validator] (https://github.com/validatorjs/validator.js), Mongoose, MongoDB and [Masonry.js](https://masonry.desandro.com)

## Testing

Ensure all the user stories have been met.

## Deployment

On [REPL](https://pinterest-clone.ddxps46.repl.co)

## Credits

### Contents

Did Searches on GitHub and Google about FCC Pinterest Clone.  Found one by Teemu Seppala.  Accessed 15 October 2021.

### Media

Images from [Wallhaven](https://wallhaven.cc).

Examples - Commodore 64, Windows 95, Light, Wembley Stadium, The Beatles, Spectrum, Fibonacci Sequence, Plasma, Women in Business Suit, Christmas Time.

### Acknowledgements

- [FreeCodeCamp](https://www.freecodecamp.org)
- [Teemu Seppala](https://github.com/Feddle/pinterest-clone)
- [Bootstrap](https://www.getbootstrap.com)
- [Pug](https://www.pugjs.org)
- [Passport](https://www.passportjs.org)
- [Wallhaven](https://wallhaven.cc)
- [Validator](https://github.com/validatorjs/validator.js)