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

## Technologies

Uses [Masonry.js](https://masonry.desandro.com)

## Credits

### Contents

Did Searches on GitHub and Google about FCC Pinterest Clone.  Accessed 15 October 2021.

### Acknowledgements

- [FreeCodeCamp](https://www.freecodecamp.org)
- [Teemu Seppala](https://github.com/Feddle/pinterest-clone)