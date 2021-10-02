// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

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
  let disposable = vscode.commands.registerCommand(
    'hyf-vscode-config.applySettings',
    async () => {
      try {
        const json = await fs.promises.readFile(
          path.join(__dirname, '../data/user-settings.json'),
          'utf8'
        );
        const targetSettings = JSON.parse(json);
        const config = vscode.workspace.getConfiguration();
        const promises = Object.entries(targetSettings).map(([key, value]) => {
          return config.update(key, value, vscode.ConfigurationTarget.Global);
        });
        await Promise.all(promises);
        vscode.window.showInformationMessage(
          'HackYourFuture recommended VSCode settings applied successfully.'
        );
      } catch {
        vscode.window.showErrorMessage(
          'An error occurred while attempting to apply the HackYourFuture recommended VSCode settings.'
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
