from pathlib import Path

import yaml
from openapidocs.mk.v3 import OpenAPIV3DocumentationHandler


def define_env(env):
    """
    This is the hook for the variables, macros and filters.
    """

    @env.macro
    def render_openapi_yaml(path):
        return OpenAPIV3DocumentationHandler(
            yaml.safe_load(Path(path).read_text()),
            style="MKDOCS",
        ).write()
