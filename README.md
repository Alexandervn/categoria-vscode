# Categoria

Experimental dark VS Code theme that colors syntax by category

## Concept

Each syntactic category gets its own distinct color, so code can be read by category at a glance rather than needing to parse every token.

| Color      | Category                                                                              |
| ---------- | ------------------------------------------------------------------------------------- |
| light blue | keywords — built-in keywords like `const`, `function`, `if`, `return`, etc.           |
| magenta    | types — names of types, interfaces and classes                                        |
| white      | identifiers — user-provided names of variables, properties, labels, event names, etc. |
| green      | literals — user-provided values like strings, numbers, regexp, etc.                   |
| amber      | calls — function or method calls                                                      |
| gray       | comments, JS Docs, punctuation                                                        |

The goal is to make it easier to scan lots of unfamiliar code.

## Scope

Categoria only defines colors for the editor pane.

UI surfaces — sidebar, activity bar, status bar, terminal, panels — are not themed and will inherit your current base theme (typically Dark+).

Colors for diffs (inserted, deleted, changed) are not themed.

Comments may be hard to read on smaller or lower-brightness screens.

## Installation

Clone the repo and symlink it into your VS Code extensions folder:

```sh
git clone https://github.com/alexandervn/categoria-vscode ~/projects/categoria
ln -s ~/projects/categoria ~/.vscode/extensions/categoria
```

Restart VS Code, then select **Categoria** via `Cmd/Ctrl+Shift+P` → _Preferences: Color Theme_.

## Development

The theme is defined in `themes/categoria-color-theme.json`. After editing it, reload VS Code with `Cmd/Ctrl+Shift+P` → _Developer: Reload Window_ to see changes immediately.

To figure out which scope to target for a given token, use `Cmd/Ctrl+Shift+P` → _Developer: Inspect Editor Tokens and Scopes_ and click on any piece of code.

To preview changes in an isolated window instead, open the repo in VS Code and run _Launch Extension_ via `View → Run` (or `F5`). This launches an Extension Development Host with the theme active. Changes to the theme file are applied automatically in that window without a reload.
