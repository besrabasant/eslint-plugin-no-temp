# eslint-plugin-custom

The `eslint-plugin-custom` is designed to help developers maintain clean and production-ready code by enforcing best practices and preventing certain patterns from being committed. This plugin includes rules such as disallowing temporary code snippets that are marked with a `@temp` comment tag.

## Installation

Before you start, ensure you have [ESLint](http://eslint.org) installed in your project. If not, you can add it by running:

```bash
npm install eslint --save-dev
```

To use the eslint-plugin-custom in your project, you'll need to install it via npm. If it's hosted on a registry, use:

```bash
npm install eslint-plugin-custom --save-dev

```

## Usage
Add custom to the plugins section of your ESLint configuration file (.eslintrc.js or .eslintrc.json). Note that you do not need to include the **eslint-plugin-** prefix:

```json
{
  "plugins": [
    "custom"
  ]
}
```
Then configure the rules you wish to use under the rules section:

```json
{
  "rules": {
    "custom/no-temp-comments": "error"
  }
}
```

## Example

Here's an example where the rule would flag an error due to the presence of a @temp tag in a comment:

```js
// @temp This is a temporary hack to address issue XYZ
const temporaryFix = () => {
  // implementation
};
```
To resolve the violation, review and address the temporary code appropriately. If the code is no longer needed or has been finalized, remove the @temp tag:

```js
// Finalized implementation for issue XYZ
const permanentFix = () => {
  // implementation
};

```

## Supported Rules
- **no-temp-comments**: Prevents code marked as temporary (using the @temp tag in comments) from being committed. This encourages developers to review or remove temporary code snippets before pushing changes.

## Contributing
Contributions to `eslint-plugin-custom` are always welcome, whether it be improvements to the documentation, bug fixes, or new features.

## License
This project is licensed under the MIT License.

