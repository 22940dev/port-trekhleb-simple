# trekhleb.github.io

[![CI](https://github.com/trekhleb/trekhleb.github.io/workflows/CI/badge.svg)](https://github.com/trekhleb/trekhleb.github.io/actions?query=workflow%3ACI+branch%3Amaster)

In progress....

## Development

[Gatsby cheat-sheet](https://www.gatsbyjs.com/gatsby-cheat-sheet.pdf)

### Running the project locally

To run project locally in development mode on [http://localhost:8000](http://localhost:8000):

```bash
npm run develop
```

To build the production version of the project:

```bash
npm run build
```

Serve the production build for testing on [http://localhost:9000](http://localhost:9000):

```bash
npm run serve
```

To do ESLint and Type checking:

```bash
npm run lint
npm run type
```

### Working with icons

Use [react-icons.github.io](https://react-icons.github.io/react-icons) to search for available icons.

### Custom Domain Support

To serve the [trekhleb.github.io](https://trekhleb.github.io) web-site on a custom domain [trekhleb.dev](https://trekhleb.dev) make sure that the `publish` branch has `CNAME` file in the root folder. For more details read [this](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site).