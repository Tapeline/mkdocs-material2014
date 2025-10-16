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

## `footer_links`

Links to place in sidebar footer.

!!! example
    ```yaml
    footer_links:
        Debug page: /debug
    ```


## `syntax_scheme`

Syntax scheme to use for highlighting. Options:

- `material`
- `primary-color`
- `none` (use when you want to define custom scheme via css)

Default: `material`


# Page config

Each page can be configured with meta (frontmatter):

```md
---
parameter: value
---
# My page
...
```

## `hide-toc`

`true`/`false`.

Hide table of contents (on the right).

Visible by default.

## `hide-footer`

`true`/`false`.

Hide footer prev/next navigation.

Visible by default.

## `zoom-media`

`list of strings`

List of CSS selectors of elements that will support zoom on click.

Default: `["img"]`

To disable, set to empty list.

## `toc-depth`

`number`, one of `1`, `2`, `3`, `4`

Specifies how deep the ToC should be.

Default: `2`
