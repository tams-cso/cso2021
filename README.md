# CSO Website 2020-2021

The official TAMS computer science organization website for the 2020-2021 school year. Note that we're using Yarn rather than npm, because Netlify (our deployment tool) also uses Yarn.

## Installation

1. Clone this repository
2. Run `yarn install` to install the needed dependencies.
3. Run `yarn develop` to start a live development server on port 8000.

## Contributing

Help is more than welcome. If you'd like to help, please work on a branch and open a pull request when your changes are ready. 

## Structure

```
src
- pages (contains the pages, rendered with the filename as the URL (e.g. duck-diaries goes to /duck-diaries)
- components (assorted components for reuse)
- data (json data to populate the page source files)
- images (exactly what it sounds like)
- styles (sass styles, go to the _variables.scss file to override bootstrap defaults)
```

Original theme README:

# Gatsby React Bootstrap Starter

A GatsbyJS starter that includes

- react-bootstrap
- react-icons
- sticky on scroll navbar
- SASS compiler
- basic layout
