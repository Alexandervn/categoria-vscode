# Categoria

A personal dark theme for VS Code.

## Installation

Clone the repo and symlink it into your VS Code extensions folder:

```sh
git clone <repo-url> ~/projects/categoria
ln -s ~/projects/categoria ~/.vscode/extensions/categoria
```

Restart VS Code, then select **Categoria** via `Cmd+Shift+P` → *Preferences: Color Theme*.

## Development

The theme is defined in `themes/categoria-color-theme.json`. After editing it, reload VS Code with `Cmd+Shift+P` → *Developer: Reload Window* to see changes immediately — no build step needed.

To preview changes in an isolated window instead, open the repo in VS Code and run *Launch Extension* via `View → Run` (or `F5`). This launches an Extension Development Host with the theme active. Changes to the theme file are applied automatically in that window without a reload.

To figure out which scope to target for a given token, use `Cmd+Shift+P` → *Developer: Inspect Editor Tokens and Scopes* and click on any piece of code.

Token colorization is based on standard TextMate themes — colors are matched against one or more scopes. See the [color theme documentation](https://code.visualstudio.com/api/extension-guides/color-theme) to learn more.
