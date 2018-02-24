<p align="center">
  <img src="<-- LOGO -->" width="100">
</p>

# My Grunt Project Boilerplate

[Access the website](<-- URL -->)

This project uses:
- [Pug](https://pugjs.org/)
- [Sass](http://sass-lang.com/)
- [Grunt](https://gruntjs.com/)
- [Browsersync](https://www.browsersync.io/)

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [Grunt](https://gruntjs.com/)

```sh

# Clone this repository
git clone git@github.com:ricardogouveia3/<-- REPO -->
cd <-- REPO -->

# install dependencies
npm install

```

After that, you should be good to go :)

### Folders/Files Structure

```sh
├── assets/
│   ├── css/
│   │   └── *.sass
│   ├── img/
│   ├── js/
│   │   ├── modules/
│   │   └── index.min.js
├── includes/
│   └── *.pug
├── Gruntfile.js
├── index.pug
├── package.json
├── README.md
```
These structure will change during the project.

### Code Standarts

<-- CODE STANDART -->


### Tasks

- `grunt concat`: concat `modules/*.js` into `index.min.js`
- `grunt uglify`: uglifies `index.min.js` into itself

- `grunt sass`: build [everything].sass into style.css
- `grunt autoprefixer`: adds vendor prefixes to style.css

- `grunt imagemin`: optimize `*.jpg`,`*.png`,`*.svg` inside `assets/img`

- `grunt pug`: generates `index.html` from `index.pug` + `includes/*.pug`

- `grunt compile`: run concat, uglify, sass, autoprefixer, imagemin, pug; does *not* start server
- `grunt`: run watch [tasks: pug, sass, autoprefixer, concat, uglify] and start BrowserSync local server


## License

[MIT License](http://ricardogouveia3.mit-license.org/) © Ricardo Álvaro Gouveia Gomes Filho