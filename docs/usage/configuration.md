# Global theme config

mkdocs-material2014 supports following configuration options.

!!! note
    To make a good color choice, consider choosing one of 
    [OG Material colors](https://m1.material.io/style/color.html#color-color-palette).

## `primary_color`

Primary doc color in CSS format.

!!! example
    ```yaml
    primary_color: "#E91E63"
    ```

## `section_color`

Override primary color for certain section.

!!! example
    ```yaml
    section_color:
        Getting started: "#009688"
        Demo: "#3F51B5"
    ```

## `page_color`

Override primary color for certain page.

!!! example
    ```yaml
    page_color:
        "some/url": "#009688"
    ```

# Page config

Each page can be configured with meta:

```md
parameter: value

# My page
...
```

## `hide-toc`

Hide table of contents (on the right).

Visible by default.

## `hide-footer`

Hide footer prev/next navigation.

Visible by default.
