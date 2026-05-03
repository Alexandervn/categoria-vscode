# Categoria

Experimental dark theme for VS Code

## Idea

Each syntactic category gets its own distinct color, so code can be read by category at a glance rather than needing to parse every token.

| Color      | Category                                                        |
| ---------- | --------------------------------------------------------------- |
| amber      | calls — function calls, method calls, CSS selectors, components |
| light blue | keywords — `const`, `function`, `if`, `return`, accessors       |
| green      | literals — strings, constants, regexp                           |
| magenta    | types — type names, primitives, builtins                        |
| white      | identifiers — variables, parameters, definitions, attributes    |
| dark gray  | comments                                                        |

This to make it easier to scan (lots of, unfamiliar) code.

## Installation

Clone the repo and symlink it into your VS Code extensions folder:

```sh
git clone <repo-url> ~/projects/categoria
ln -s ~/projects/categoria ~/.vscode/extensions/categoria
```

Restart VS Code, then select **Categoria** via `Cmd+Shift+P` → _Preferences: Color Theme_.

## Development

The theme is defined in `themes/categoria-color-theme.json`. After editing it, reload VS Code with `Cmd+Shift+P` → _Developer: Reload Window_ to see changes immediately — no build step needed.

To preview changes in an isolated window instead, open the repo in VS Code and run _Launch Extension_ via `View → Run` (or `F5`). This launches an Extension Development Host with the theme active. Changes to the theme file are applied automatically in that window without a reload.

To figure out which scope to target for a given token, use `Cmd+Shift+P` → _Developer: Inspect Editor Tokens and Scopes_ and click on any piece of code.

Token colorization is based on standard TextMate themes — colors are matched against one or more scopes. See the [color theme documentation](https://code.visualstudio.com/api/extension-guides/color-theme) to learn more.
