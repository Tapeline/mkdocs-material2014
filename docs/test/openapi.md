## OpenAPI example

!!! note
    This example was created using this macro

    ```python
    import yaml
    from pathlib import Path
    from openapidocs.mk.v3 import OpenAPIV3DocumentationHandler

    def define_env(env):
        @env.macro
        def render_openapi_yaml(path):
            return OpenAPIV3DocumentationHandler(
                yaml.safe_load(Path(path).read_text()),
                style="MKDOCS",
            ).write()
    ```

{{ render_openapi_yaml("docs/example-openapi.yml") }}
