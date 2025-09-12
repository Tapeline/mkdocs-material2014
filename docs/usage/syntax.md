# Syntax reference

## Tabbed block

```md
=== "Tab name a"

    Some tab content.
    
    Some tab content.

=== "Tab name b"

    Some tab content.
    
    Some tab content.
```

### Result
=== "Tab name a"

    Some tab content.
    
    Some tab content.

=== "Tab name b"

    Some tab content.
    
    Some tab content.

## Admonition

```md
!!! admonition-type
    Some admonition content.
    
!!! admonition-type "Admonition header"
    Some admonition content
```

### Result
!!! admonition-type
    Some admonition content.
    
!!! admonition-type "Admonition header"
    Some admonition content

### Supported types

- `attention`
- `caution`
- `danger`
- `error`
- `hint`
- `important`
- `tip`
- `warning`
- `quote`
- `success`
- `see-also`
- `security`
- `example`
