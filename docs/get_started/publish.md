---
render_macros: false
---

# Build and publish

When your documentation is ready, you might want to show it to the world.

## Build

To build, simply use mkdocs:

```shell
mkdocs build
```

This will give you a static site in form of HTML, CSS and JS files,
which you can then host anywhere you'd like.

## Publishing with GitHub Pages

You can use GitHub Pages, if your repository is located there already.
Here is an example GitHub Action to use:

```yml
name: Build documentation

on:
  push:
    branches: ["master"]
  workflow_dispatch:

permissions:
  contents: read
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      artifact: ${{ steps.define-ids.outputs.artifact }}
    steps:
      - uses: actions/checkout@v4
      - uses: astral-sh/setup-uv@v6
      - name: Install dependencies
        run: uv sync --all-extras
      - name: Build docs
        run: uv run mkdocs build
      - name: Save artifact with build results
        id: deployment
        uses: actions/upload-pages-artifact@v3
        with:
          path: site
          retention-days: 1

  deploy:
    needs: [build]
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      pages: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```
