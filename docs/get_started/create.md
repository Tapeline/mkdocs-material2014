# Create your docs

After you've completed installation, you can create your project documentation 
using the mkdocs command. Go to the directory where you want your project 
to be located and run:

```shell
mkdocs new .
```

## Configure

Configure the documentation to use the material2014 theme:

```yml
site_name: My documentation
theme:
  name: material2014
  primary_color: "#E91E63"
```

Specify a primary color for your documentation. To make a good
choice, consider choosing one of 
[OG Material colors](https://m1.material.io/style/color.html#color-color-palette).

## Recommended config

You can consider adding these features to your config, which will help
your documentation greatly:

```yml
plugins:
  - mermaid2
  - ezglossary

markdown_extensions:
  - toc:
      toc_depth: 3
  - extra
  - admonition
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - attr_list
  - md_in_html
  - def_list
  - material2014.extensions.tabbed
  - pymdownx.critic
  - pymdownx.caret
  - pymdownx.keys
  - pymdownx.mark
  - pymdownx.tilde
  - pymdownx.tasklist:
      custom_checkbox: true
```

!!! note
    All examples in this documentation are written with these extensions and plugins.
