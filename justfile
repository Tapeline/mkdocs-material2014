# Cross-platform shell configuration
# Use PowerShell on Windows (higher precedence than shell setting)
set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]
# Use sh on Unix-like systems
set shell := ["sh", "-c"]

sass:
    ./dart-sass/sass.bat site/materialize-src/sass/materialize.scss site/materialize-build/css/materialize.css

