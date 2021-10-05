# HackYourFuture VSCode Config Helper

This VSCode extension is intended for use by students enrolled in the [HackYourFuture](https://www.hackyourfuture.net/) curriculum.

- It installs a recommended basic set of VSCode extensions.
- It adds a command to apply recommended user settings.
- It adds the **Ctrl+Shift+I** keyboard shortcut to toggle [parameter name inlay hints](https://code.visualstudio.com/updates/v1_60#_inlay-hints-for-javascript-and-typescript) on and off.

The extensions bundled with this VSCode extension are:

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-settings-cycler)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Settings Cycler\*](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-settings-cycler)

\* Provides support for the _parameter name inlay hint_ toggle.

To apply the recommended settings, open the VSCode Command Palette (**Ctrl+Shift+P)**, and select the command:

```text
HackYourFuture: Apply recommended VSCode Settings
```

The actual settings applied can be found [here](https://github.com/remarcmij/hyf-vscode-config/blob/main/data/user-settings.json).
