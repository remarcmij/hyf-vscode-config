// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

async function applySettings() {
  try {
    const json = await fs.promises.readFile(
      path.join(__dirname, '../data/user-settings.json'),
      'utf8'
    );
    const targetSettings = JSON.parse(json);

    const config = vscode.workspace.getConfiguration();

    // Check for a JavaScript language specific formatter setting
    const javaScriptLanguageSection = config.get('[javascript]') as
      | Record<string, unknown>
      | undefined;

    if (javaScriptLanguageSection) {
      if ('editor.defaultFormatter' in javaScriptLanguageSection) {
        // Remove JavaScript specific formatter setting and revert to the global
        // default of Prettier
        targetSettings['[javascript]'] = {
          'editor.defaultFormatter': undefined,
        };
      }
    }

    const promises = Object.entries(targetSettings).map(([section, value]) => {
      return config.update(section, value, vscode.ConfigurationTarget.Global);
    });
    const results = await Promise.allSettled(promises);
    results.forEach((result) => {
      if (result.status === 'rejected') {
        vscode.window.showErrorMessage(result.reason.message);
      }
    });
    if (results.some((result) => result.status === 'rejected')) {
      vscode.window.showWarningMessage(
        'Some recommended VSCode settings could not be applied successfully.'
      );
    } else {
      vscode.window.showInformationMessage(
        'All recommended VSCode settings have been applied successfully.'
      );
    }
  } catch {
    vscode.window.showErrorMessage(
      'An error occurred while attempting to apply the recommended VSCode settings.'
    );
  }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "hyf-vscode-config" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    'hyf-vscode-config.applySettings',
    applySettings
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
